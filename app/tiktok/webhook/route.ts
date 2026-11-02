import { NextResponse, type NextRequest } from "next/server"

import { instancesAutorisees, statutPourTikTok, transmetNotification } from "@/lib/tiktok-relais"

export const dynamic = "force-dynamic"
export const maxDuration = 10

/** Notification TikTok : transmise telle quelle à chaque back-office connu. */
export async function POST(request: NextRequest) {
  const corps = await request.text()
  const transmissions = await transmetNotification(
    corps,
    { authorization: request.headers.get("authorization"), contentType: request.headers.get("content-type") },
    instancesAutorisees(process.env.TIKTOK_INSTANCES)
  )
  return new NextResponse(null, { status: statutPourTikTok(transmissions), headers: { "cache-control": "no-store" } })
}
