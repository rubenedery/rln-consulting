import { buildLlmsContent } from "@/lib/llms-content"

export const dynamic = "force-static"

export function GET() {
  return new Response(buildLlmsContent("index"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
