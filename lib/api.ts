export const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE || "http://127.0.0.1:8000"

export async function apiFetch(
  endpoint: string,
  options?: RequestInit
) {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
  })

  if (!res.ok) {
    throw new Error("API request failed")
  }

  return res.json()
}