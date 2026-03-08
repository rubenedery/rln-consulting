import { ImageResponse } from "next/og"
import { type NextRequest } from "next/server"

export const runtime = "edge"

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  const title = searchParams.get("title") || "RLN Consulting"
  const description = searchParams.get("description") || "Agence Développement Web & Marketing Digital"
  const type = searchParams.get("type") || "default"

  // Colors
  const primary = "#2563eb" // blue-600
  const accent = "#f59e0b" // amber-500
  const bgDark = "#0f172a" // slate-900

  // Type-specific accent colors and labels
  const typeConfig: Record<string, { color: string; label: string }> = {
    blog: { color: "#10b981", label: "Blog" },
    "cas-etude": { color: "#8b5cf6", label: "Cas d'étude" },
    service: { color: primary, label: "Service" },
    tarifs: { color: accent, label: "Tarifs" },
    default: { color: primary, label: "" },
  }

  const config = typeConfig[type] || typeConfig.default

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: bgDark,
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar with gradient */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: `linear-gradient(to right, ${primary}, ${accent})`,
            display: "flex",
          }}
        />

        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: `linear-gradient(135deg, ${primary}, ${accent})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "24px",
                fontWeight: 700,
              }}
            >
              R
            </div>
            <span
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "#e2e8f0",
              }}
            >
              RLN Consulting
            </span>
          </div>

          {config.label && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "8px 20px",
                borderRadius: "9999px",
                backgroundColor: config.color + "20",
                border: `1px solid ${config.color}40`,
              }}
            >
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: config.color,
                }}
              >
                {config.label}
              </span>
            </div>
          )}
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              fontSize: title.length > 60 ? "42px" : "52px",
              fontWeight: 800,
              color: "#f8fafc",
              lineHeight: 1.2,
              margin: 0,
              marginBottom: "24px",
              maxWidth: "900px",
            }}
          >
            {title}
          </h1>
          {description && (
            <p
              style={{
                fontSize: "22px",
                color: "#94a3b8",
                lineHeight: 1.5,
                margin: 0,
                maxWidth: "800px",
              }}
            >
              {description.length > 120
                ? description.slice(0, 120) + "..."
                : description}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #1e293b",
            paddingTop: "24px",
          }}
        >
          <span
            style={{
              fontSize: "18px",
              color: "#64748b",
            }}
          >
            rln-consulting.com
          </span>
          <div
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "16px",
              color: "#64748b",
            }}
          >
            <span>Next.js</span>
            <span>React</span>
            <span>Google Ads</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  )
}
