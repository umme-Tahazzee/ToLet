// components/admin/sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Building2, ClipboardList, Tags, X, CreditCard, Search } from "lucide-react";
import { NavbarProps } from "@/components/shared/Navbar";

const navItems = [
    { label: "Overview", href: "/tenant", icon: LayoutDashboard },
    { label: "My Requests", href: "/tenant/rentals", icon: ClipboardList },
    { label: "Payments", href: "/tenant/payments", icon: CreditCard },
    { label: "Browse Properties", href: "/properties", icon: Search },
];

interface TenantSidebarProps extends NavbarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TenantSidebar({ user, isOpen, onClose }: TenantSidebarProps) {
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
    <>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-white
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:static md:translate-x-0 md:z-auto`}
      >
        <div className="flex items-center justify-between gap-3 border-b p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
              {initials}
            </div>
            <div className="min-w-0">
              <h1 className="truncate text-sm font-semibold text-gray-900">{name}</h1>
              <p className="truncate text-xs text-gray-500">{email}</p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close sidebar"
            className="shrink-0 rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 md:hidden"
          >
            <X size={18} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-3 py-4">
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
                onClick={onClose}
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

        <div className="border-t px-5 py-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Admin Panel</p>
        </div>
      </aside>
    </>
  );
}