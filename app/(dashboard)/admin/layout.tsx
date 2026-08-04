
import { getMe } from "@/services/getMe";
import AdminShell from "./_components/AdminShell";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getMe();

  return <AdminShell user={user}>
    {children}
    </AdminShell>;
}