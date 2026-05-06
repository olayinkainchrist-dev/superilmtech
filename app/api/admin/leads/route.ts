import { supabaseAdmin } from "@/lib/supabaseAdmin"

const allowedStatuses = ["new", "contacted", "qualified", "closed", "archived"]

function getUnauthorizedResponse(request: Request): Response | undefined {
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

  return undefined
}

export async function GET(request: Request): Promise<Response> {
  const unauthorizedResponse = getUnauthorizedResponse(request)

  if (unauthorizedResponse) {
    return unauthorizedResponse
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

export async function PATCH(request: Request): Promise<Response> {
  const unauthorizedResponse = getUnauthorizedResponse(request)

  if (unauthorizedResponse) {
    return unauthorizedResponse
  }

  try {
    const body = await request.json()

    const id = String(body.id || "").trim()
    const status = String(body.status || "").trim().toLowerCase()

    if (!id) {
      return Response.json(
        { success: false, error: "Lead ID is required." },
        { status: 400 }
      )
    }

    if (!allowedStatuses.includes(status)) {
      return Response.json(
        { success: false, error: "Invalid lead status." },
        { status: 400 }
      )
    }

    const { data, error } = await supabaseAdmin
      .from("leads")
      .update({ status })
      .eq("id", id)
      .select("*")
      .single()

    if (error) {
      return Response.json(
        { success: false, error: error.message },
        { status: 500 }
      )
    }

    return Response.json({
      success: true,
      lead: data,
    })
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong.",
      },
      { status: 500 }
    )
  }
}