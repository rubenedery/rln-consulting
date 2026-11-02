// Lancer : npx tsx --test tests/tiktok-relais.test.ts
import assert from "node:assert/strict"
import { describe, it } from "node:test"

import {
  instanceDuState,
  instancesAutorisees,
  statutPourTikTok,
  transmetNotification,
  urlRetourInstance,
} from "../lib/tiktok-relais"

const INSTANCES = JSON.stringify({ "boutique-a": "https://api.boutique-a.fr", "boutique-b": "https://api.boutique-b.fr/" })

describe("liste blanche des instances", () => {
  it("garde les origines HTTPS d'identifiants valides", () => {
    const instances = instancesAutorisees(INSTANCES)
    assert.equal(instances.get("boutique-a"), "https://api.boutique-a.fr")
    assert.equal(instances.get("boutique-b"), "https://api.boutique-b.fr")
  })

  it("écarte HTTP, identifiants hors format, chemins et JSON illisible", () => {
    const instances = instancesAutorisees(
      JSON.stringify({ http: "http://api.x.fr", "Maj": "https://a.fr", chemin: "https://a.fr/piege?x=1", nombre: 3 })
    )
    assert.equal(instances.has("http"), false)
    assert.equal(instances.has("Maj"), false)
    assert.equal(instances.get("chemin"), "https://a.fr")
    assert.equal(instances.has("nombre"), false)
    assert.equal(instancesAutorisees("pas du json").size, 0)
    assert.equal(instancesAutorisees(undefined).size, 0)
    assert.equal(instancesAutorisees("[]").size, 0)
  })
})

describe("retour d'autorisation", () => {
  const instances = instancesAutorisees(INSTANCES)

  it("lit l'instance devant le « ~ »", () => {
    assert.equal(instanceDuState("boutique-a~abc.123.sig"), "boutique-a")
    assert.equal(instanceDuState("abc.123.sig"), null)
    assert.equal(instanceDuState("~abc"), null)
    assert.equal(instanceDuState("../x~abc"), null)
    assert.equal(instanceDuState(null), null)
  })

  it("redirige vers le back-office avec tous les paramètres TikTok", () => {
    const recherche = new URLSearchParams({ app_key: "k", code: "c0de", locale: "fr-FR", shop_region: "FR", state: "boutique-a~n.1.s" })
    const cible = new URL(urlRetourInstance(recherche, instances) ?? "")
    assert.equal(cible.origin, "https://api.boutique-a.fr")
    assert.equal(cible.pathname, "/hooks/tiktok/autorisation")
    assert.equal(cible.searchParams.get("code"), "c0de")
    assert.equal(cible.searchParams.get("state"), "boutique-a~n.1.s")
    assert.equal(cible.searchParams.get("shop_region"), "FR")
  })

  it("refuse une instance absente de la liste ou un state sans instance", () => {
    assert.equal(urlRetourInstance(new URLSearchParams({ code: "c", state: "inconnue~n.1.s" }), instances), null)
    assert.equal(urlRetourInstance(new URLSearchParams({ code: "c", state: "n.1.s" }), instances), null)
    assert.equal(urlRetourInstance(new URLSearchParams({ code: "c" }), instances), null)
  })
})

describe("transmission des notifications", () => {
  const instances = instancesAutorisees(INSTANCES)
  const corps = '{"type":1,"shop_id":"7","data":{"order_id":"5"},  "timestamp":1}'

  it("transmet le corps brut et l'en-tête Authorization à chaque instance", async () => {
    const appels: { url: string; init: RequestInit }[] = []
    const faux: typeof fetch = async (url, init) => {
      appels.push({ url: String(url), init: init ?? {} })
      return new Response(null, { status: 200 })
    }
    const resultats = await transmetNotification(corps, { authorization: "sig", contentType: "application/json" }, instances, faux)
    assert.deepEqual(appels.map((a) => a.url).sort(), ["https://api.boutique-a.fr/hooks/tiktok", "https://api.boutique-b.fr/hooks/tiktok"])
    for (const appel of appels) {
      assert.equal(appel.init.body, corps)
      assert.equal((appel.init.headers as Record<string, string>).authorization, "sig")
    }
    assert.equal(statutPourTikTok(resultats), 200)
  })

  it("répond 200 si une instance accepte, 502 si aucune", async () => {
    const une_seule: typeof fetch = async (url) => {
      if (String(url).includes("boutique-a")) throw new Error("injoignable")
      return new Response(null, { status: 200 })
    }
    assert.equal(statutPourTikTok(await transmetNotification(corps, { authorization: "s", contentType: null }, instances, une_seule)), 200)
    const aucune: typeof fetch = async () => new Response(null, { status: 401 })
    assert.equal(statutPourTikTok(await transmetNotification(corps, { authorization: "s", contentType: null }, instances, aucune)), 502)
  })

  it("répond 200 quand aucune instance n'est déclarée (rien à livrer)", async () => {
    assert.equal(statutPourTikTok(await transmetNotification(corps, { authorization: null, contentType: null }, new Map())), 200)
  })
})
