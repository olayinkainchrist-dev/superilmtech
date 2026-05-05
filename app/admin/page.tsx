import type { Metadata } from "next"
import AdminLeadsDashboard from "@/components/AdminLeadsDashboard"

export const metadata: Metadata = {
  title: "Admin Leads | SuperILM Tech",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminPage() {
  return <AdminLeadsDashboard />
}