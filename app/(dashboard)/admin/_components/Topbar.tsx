// components/admin/topbar.tsx
"use client";

import { usePathname } from "next/navigation";
import { LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function AdminTopbar({ onMobileMenuClick }: { onMobileMenuClick: () => void }) {
  const pathname = usePathname();
  const title = getTitle(pathname);

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={onMobileMenuClick}
          className="rounded-md p-1.5 text-gray-600 hover:bg-gray-100 md:hidden"
        >
          <Menu size={20} />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
      </div>

      <Button
        variant="outline"
        size="sm"
        className="gap-2 text-red-600 hover:bg-red-50 hover:text-red-700"
      >
        <LogOut size={16} />
        <span className="hidden sm:inline">Logout</span>
      </Button>
    </header>
  );
}