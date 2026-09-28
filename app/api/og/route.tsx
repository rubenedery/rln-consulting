import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

/**
 * Image Open Graph aux couleurs de l'Agence RLN :
 * fond encre, bleu Klein, signe « page au coin replié ».
 */
export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const title = searchParams.get("title") || "Agence RLN"
  const description = searchParams.get("description") || "On construit vos produits digitaux, et on les fait connaître."
  const type = searchParams.get("type") || "default"

  const ink = "#0B0D12"
  const klein = "#1F2BFF"
  const kleinLight = "#8B93FF"
  const kleinPale = "#C8CDFF"

  const labels: Record<string, string> = {
    blog: "Blog",
    "cas-etude": "Cas client",
    service: "Expertise",
    tarifs: "Tarifs",
  }
  const label = labels[type] || ""

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: ink,
          padding: "64px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Coin replié en haut à droite */}
        <div style={{ position: "absolute", top: 0, right: 0, width: 220, height: 220, display: "flex", backgroundColor: klein }} />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 0,
            height: 0,
            display: "flex",
            borderTop: `90px solid ${ink}`,
            borderLeft: `90px solid ${kleinPale}`,
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <svg width="44" height="44" viewBox="0 0 64 64">
            <path d="M0 0H42L64 22V64H0Z" fill={klein} />
            <path d="M42 0V22H64Z" fill={kleinPale} />
          </svg>
          <span style={{ fontSize: "30px", fontStyle: "italic", color: kleinLight }}>agence</span>
          <span style={{ fontSize: "32px", fontWeight: 700, color: "#EDEFF4", letterSpacing: "-0.03em" }}>RLN</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", flex: 1, justifyContent: "center", maxWidth: "900px" }}>
          {label && (
            <span
              style={{
                fontSize: "18px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: kleinLight,
                marginBottom: "20px",
              }}
            >
              {label}
            </span>
          )}
          <h1
            style={{
              fontSize: title.length > 60 ? "48px" : "62px",
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              marginBottom: "24px",
            }}
          >
            {title}
          </h1>
          {description && (
            <p style={{ fontSize: "24px", color: "#959AAB", lineHeight: 1.45, margin: 0, maxWidth: "820px" }}>
              {description.length > 120 ? description.slice(0, 120) + "…" : description}
            </p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #252833",
            paddingTop: "24px",
            fontSize: "18px",
            color: "#959AAB",
          }}
        >
          <span>rln-consulting.com</span>
          <span>Sites · Apps · IA · SEO · Acquisition</span>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
