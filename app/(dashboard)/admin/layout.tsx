import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "./_components/Sidebar";

import { getMe } from "@/services/getMe";
import { AdminTopbar } from "./_components/Topbar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getMe();

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <AdminSidebar user={user} />
        <div className="flex flex-1 flex-col">
          <AdminTopbar user={user} />
          <main className="flex-1 overflow-y-auto bg-gray-50 p-6">{children}</main>
        </div>
      </SidebarProvider>
    </div>
  );
}