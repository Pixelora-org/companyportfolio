import { NextResponse } from "next/server"
import { feedbackSchema } from "@/lib/feedback-schema"
import { getSupabaseAdmin } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = feedbackSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid feedback", details: parsed.error.flatten() },
        { status: 400 }
      )
    }

    const supabase = getSupabaseAdmin()
    if (!supabase) {
      return NextResponse.json(
        {
          error:
            "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and a key to your env.",
        },
        { status: 503 }
      )
    }

    const { error } = await supabase.from("feedback").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      comment: parsed.data.comment,
    })

    if (error) {
      console.error("Supabase insert error:", error)
      return NextResponse.json(
        { error: "Could not save feedback. Check table/RLS setup." },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Feedback API error:", error)
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 })
  }
}
