
import { getMe } from "@/services/getMe";
import TenantShill from "./_components/TenantShill";


export default async function TenatLayout({ children }: { children: React.ReactNode }) {
  const user = await getMe();

  return <TenantShill user={user}>
    {children}
    </TenantShill>;
}