"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Home,
  Briefcase,
  Building2,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  Users,
  BarChart3,
  AlertCircle,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type User = {
  data?: {
    profile?: {
      role?: string;
      name?: string;
    };
  };
};

type NavLink = {
  label: string;
  href: string;
  icon: React.ReactNode;
  roles?: string[];
};

const NAV_LINKS: NavLink[] = [
  // Tenant links
  { label: "Dashboard", href: "/dashboard/tenant", icon: <Home className="w-5 h-5" />, roles: ["tenant"] },
  { label: "My Rentals", href: "/dashboard/tenant/rentals", icon: <Building2 className="w-5 h-5" />, roles: ["tenant"] },
  { label: "Messages", href: "/dashboard/tenant/messages", icon: <MessageSquare className="w-5 h-5" />, roles: ["tenant"] },
  { label: "Documents", href: "/dashboard/tenant/documents", icon: <FileText className="w-5 h-5" />, roles: ["tenant"] },

  // Landlord links
  { label: "Dashboard", href: "/dashboard/landlord", icon: <Home className="w-5 h-5" />, roles: ["landlord"] },
  { label: "Properties", href: "/dashboard/landlord/properties", icon: <Building2 className="w-5 h-5" />, roles: ["landlord"] },
  { label: "Tenants", href: "/dashboard/landlord/tenants", icon: <Users className="w-5 h-5" />, roles: ["landlord"] },
  { label: "Revenue", href: "/dashboard/landlord/revenue", icon: <BarChart3 className="w-5 h-5" />, roles: ["landlord"] },
  { label: "Messages", href: "/dashboard/landlord/messages", icon: <MessageSquare className="w-5 h-5" />, roles: ["landlord"] },

  // Admin links
  { label: "Dashboard", href: "/dashboard/admin", icon: <LayoutDashboard className="w-5 h-5" />, roles: ["admin"] },
  { label: "Users", href: "/dashboard/admin/users", icon: <Users className="w-5 h-5" />, roles: ["admin"] },
  { label: "Properties", href: "/dashboard/admin/properties", icon: <Building2 className="w-5 h-5" />, roles: ["admin"] },
  { label: "Reports", href: "/dashboard/admin/reports", icon: <BarChart3 className="w-5 h-5" />, roles: ["admin"] },
  { label: "Issues", href: "/dashboard/admin/issues", icon: <AlertCircle className="w-5 h-5" />, roles: ["admin"] },
];

export function Sidebar({ user }: { user: User }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const userRole = user?.data?.profile?.role?.toLowerCase() || "";
  const filteredLinks = NAV_LINKS.filter((link) => !link.roles || link.roles.includes(userRole));

  const handleLogout = async () => {
    try {
      await fetch("/api/logout", { method: "POST" });
      router.push("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-16 left-4 z-40 lg:hidden p-2 rounded-lg hover:bg-sidebar-accent"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-64px)] w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 ease-in-out z-30 lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-2">
            {filteredLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent"
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Bottom Section */}
          <div className="border-t border-sidebar-border p-4 space-y-2">
            <Link
              href="/dashboard/settings"
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium transition-colors ${
                pathname === "/dashboard/settings"
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent"
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </Link>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg font-medium text-sidebar-foreground hover:bg-sidebar-accent transition-colors text-left"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden top-16"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
