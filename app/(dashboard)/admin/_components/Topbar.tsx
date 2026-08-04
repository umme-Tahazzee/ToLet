// _components/Topbar.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NavbarProps } from "@/components/shared/Navbar";
import { useActionState } from "react";
import { logout } from "@/services/logout";
import { toast } from "sonner";

const pageTitles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/users": "Users",
  "/admin/properties": "Properties",
  "/admin/rentals": "Rentals",
  "/admin/categories": "Categories",
};

const getTitle = (pathname: string) => {
  if (pageTitles[pathname]) return pageTitles[pathname];
  const matched = Object.keys(pageTitles).find(
    (key) => key !== "/admin" && pathname.startsWith(key)
  );
  return matched ? pageTitles[matched] : "Admin";
};

export function AdminTopbar({user}:NavbarProps) {

  const pathname = usePathname();
  const title = getTitle(pathname);

   const router = useRouter();

  const handleLogout = async(action: string , href?:string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
      router.refresh();
      return;
    }
  };

  return (
    <form className="flex h-16 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <h2 className="text-lg font-extrabold text-primary ">{title}</h2>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
        onClick={async()=>{await handleLogout("logout")}}
      >
        <LogOut size={16} />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </form>
  );
}