import {
  type QuittanceData,
  formatMoisAnnee,
  formatEuros,
  formatDateLongue,
  periodeComplete,
  montantNumerique,
  totalQuittance,
} from "@/lib/quittance"

interface QuittancePreviewProps {
  data: QuittanceData
}

function Champ({ valeur, placeholder }: { valeur: string; placeholder: string }) {
  if (valeur.trim()) return <>{valeur}</>
  return <span className="text-neutral-400">[{placeholder}]</span>
}

export function QuittancePreview({ data }: QuittancePreviewProps) {
  const total = totalQuittance(data)
  const partiel = montantNumerique(data.montantPartiel)
  const solde = Math.max(0, total - partiel)
  const periode = periodeComplete(data.periodeMois, data.periodeAnnee)
  const moisAnnee = formatMoisAnnee(data.periodeMois, data.periodeAnnee)

  return (
    <div className="quittance-print bg-white text-black rounded-lg border border-neutral-200 p-8 text-sm leading-relaxed shadow-sm">
      <h2 className="text-center text-lg font-bold uppercase tracking-wide mb-1 text-black">
        {data.paiementPartiel ? "Reçu de paiement partiel" : "Quittance de loyer"}
      </h2>
      <p className="text-center text-neutral-600 mb-8 capitalize">{moisAnnee}</p>

      <div className="mb-8">
        <p className="font-semibold">
          <Champ valeur={data.bailleurNom} placeholder="Nom du bailleur" />
        </p>
        <p className="whitespace-pre-line">
          <Champ valeur={data.bailleurAdresse} placeholder="Adresse du bailleur" />
        </p>
      </div>

      <div className="mb-8 text-right">
        <p className="text-neutral-600">À l&apos;attention de</p>
        <p className="font-semibold">
          <Champ valeur={data.locataireNom} placeholder="Nom du locataire" />
        </p>
        <p className="whitespace-pre-line">
          <Champ valeur={data.logementAdresse} placeholder="Adresse du logement" />
        </p>
      </div>

      <p className="mb-6">
        Fait à <Champ valeur={data.lieuEmission} placeholder="Lieu" />, le{" "}
        {formatDateLongue(data.dateEmission) || (
          <span className="text-neutral-400">[Date d&apos;émission]</span>
        )}
      </p>

      <p className="mb-6 font-medium">
        Objet : {data.paiementPartiel ? "reçu de paiement partiel" : "quittance de loyer"} —
        période {periode}
      </p>

      {data.paiementPartiel ? (
        <p className="mb-8 text-justify">
          Je soussigné(e){" "}
          <Champ valeur={data.bailleurNom} placeholder="Nom du bailleur" />, bailleur du
          logement situé{" "}
          <Champ valeur={data.logementAdresse} placeholder="adresse du logement" />, déclare
          avoir reçu de{" "}
          <Champ valeur={data.locataireNom} placeholder="Nom du locataire" /> la somme de{" "}
          <strong>{formatEuros(partiel)}</strong> à titre de paiement partiel du loyer et des
          charges pour la période {periode}. Le solde restant dû au titre de cette période
          s&apos;élève à <strong>{formatEuros(solde)}</strong>. Le présent reçu ne vaut pas
          quittance.
        </p>
      ) : (
        <p className="mb-8 text-justify">
          Je soussigné(e){" "}
          <Champ valeur={data.bailleurNom} placeholder="Nom du bailleur" />, bailleur du
          logement situé{" "}
          <Champ valeur={data.logementAdresse} placeholder="adresse du logement" />, déclare
          avoir reçu de{" "}
          <Champ valeur={data.locataireNom} placeholder="Nom du locataire" /> la somme de{" "}
          <strong>{formatEuros(total)}</strong> au titre du paiement du loyer et des charges
          pour la période {periode}, et lui en donne quittance, sous réserve de tous mes
          droits.
        </p>
      )}

      <div className="mb-8 border border-neutral-300 rounded p-4">
        <p className="font-semibold mb-2">Détail du règlement</p>
        <div className="flex justify-between">
          <span>Loyer hors charges</span>
          <span>{formatEuros(montantNumerique(data.loyerHorsCharges))}</span>
        </div>
        <div className="flex justify-between">
          <span>Provision pour charges</span>
          <span>{formatEuros(montantNumerique(data.provisionsCharges))}</span>
        </div>
        <div className="flex justify-between font-semibold border-t border-neutral-300 mt-2 pt-2">
          <span>Total</span>
          <span>{formatEuros(total)}</span>
        </div>
        {data.paiementPartiel && (
          <>
            <div className="flex justify-between mt-2">
              <span>Montant reçu (paiement partiel)</span>
              <span>{formatEuros(partiel)}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Solde restant dû</span>
              <span>{formatEuros(solde)}</span>
            </div>
          </>
        )}
        <p className="mt-2 text-neutral-600">
          Date du paiement :{" "}
          {formatDateLongue(data.datePaiement) || (
            <span className="text-neutral-400">[Date du paiement]</span>
          )}
        </p>
      </div>

      <div className="mb-10 text-right">
        <p className="mb-12">Signature du bailleur</p>
      </div>

      {!data.paiementPartiel && (
        <p className="text-xs text-neutral-500 text-justify">
          Cette quittance annule tous les reçus qui auraient pu être établis pour des acomptes
          versés au titre de la période mentionnée ci-dessus. Elle est délivrée sous réserve de
          l&apos;encaissement effectif des sommes indiquées.
        </p>
      )}
    </div>
  )
}
