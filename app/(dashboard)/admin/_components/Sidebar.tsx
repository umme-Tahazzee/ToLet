// components/admin/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Building2, ClipboardList, Tags } from "lucide-react";
import { NavbarProps } from "@/components/shared/Navbar";
import { Sidebar, SidebarHeader } from "@/components/ui/sidebar";

const navItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Properties", href: "/admin/properties", icon: Building2 },
  { label: "Rentals", href: "/admin/rentals", icon: ClipboardList },
  { label: "Categories", href: "/admin/categories", icon: Tags },
];

export function AdminSidebar({ user }: NavbarProps) {
  const pathname = usePathname();

  const name: string = user?.data?.profile?.name ?? "Admin";
  const email: string = user?.data?.profile?.email ?? "";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <Sidebar className="w-64 border-r bg-white flex flex-col">
      {/* Profile header */}
      <SidebarHeader className="p-5 border-b">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center 
          rounded-full bg-primary text-sm font-semibold text-white">
            {initials}
          </div>
          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-gray-900">
              {name}
            </h1>
            <p className="truncate text-xs text-gray-500">{email}</p>
          </div>
        </div>
      </SidebarHeader>

      {/* Nav items */}
      <nav className="flex flex-1 flex-col gap-1 px-3 py-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active =
            item.href === "/admin"
              ? pathname === item.href
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                active
                  ? "bg-primary text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <Icon
                size={18}
                className={`transition-colors ${
                  active ? "text-white" : "text-gray-400 group-hover:text-gray-700"
                }`}
              />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Optional footer */}
      <div className="border-t px-5 py-4">
        <p className="text-xs text-gray-400">© {new Date().getFullYear()} Admin Panel</p>
      </div>
    </Sidebar>
  );
}