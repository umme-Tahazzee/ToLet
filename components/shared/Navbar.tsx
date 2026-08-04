"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LogOut,  User, ChevronDown, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from '../../app/asssests/logo.png'
import { logout } from "@/services/logout";
import { toast } from "sonner";
import { IUser } from "@/types";


// Navigation items configuration
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
];

// User menu items configuration
const userMenuItems = [
  { label: "Profile", icon: User, action: "profile", href: '/profile' },
  { label: "Dashboard", icon: LayoutDashboard, action: "dashboard", href: '/dashboard' },
];

export type NavbarProps = {
  user: IUser;
};

export function Navbar({ user }: NavbarProps) {

  const router = useRouter();

  const handleUserMenuAction = async (action: string, href?: string) => {
    if (action === "logout") {
      await logout();
      toast.success("User Logged Out Successfully!");
      router.push("/login");
      router.refresh();
      return;
    }

    if (action === "dashboard") {
      const role = user.data?.profile.role;
      if (role === "TENANT") {
        router.push("/tenant");
      } else if (role === "LANDLORD") {
        router.push("/landlord");
      } else if (role === "ADMIN") {
        router.push("/admin");
      }
      return;
    }

    if (href) {
      router.push(href);
    }
  };

  return (
    <nav className="border-b border-b-gray-100 border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <h1 className="uppercase text-primary tracking-wide text-2xl font-extrabold">TOLET</h1>
          </Link>

          {/* Nav Links */}
          <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex md:items-center md:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* User Dropdown */}
          {user.success ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <button
                    type="button"
                    className="flex items-center gap-1.5 cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                  </button>
                }
              />

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">
                        {user.data?.profile.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {user.data?.profile.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {userMenuItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem
                      key={item.action}
                      onClick={() => handleUserMenuAction(item.action, item.href)}
                    >
                      <Icon className="w-4 h-4 mr-2" />
                      <span>{item.label}</span>
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => {
                    await handleUserMenuAction("logout");
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          ) : (
            <Link href={"/login"}>
              <Button className="cursor-pointer">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}