import { supabaseAdmin } from "@/lib/supabaseAdmin"

export async function GET(request: Request) {
  const token = request.headers.get("x-admin-password")

  if (!process.env.ADMIN_DASHBOARD_PASSWORD) {
    return Response.json(
      { success: false, error: "Admin password is not configured." },
      { status: 500 }
    )
  }

  if (token !== process.env.ADMIN_DASHBOARD_PASSWORD) {
    return Response.json(
      { success: false, error: "Unauthorized." },
      { status: 401 }
    )
  }

  const { data, error } = await supabaseAdmin
    .from("leads")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    )
  }

  return Response.json({
    success: true,
    leads: data,
  })
}