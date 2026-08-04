"use client";

import { useState } from "react";

import { IUser } from "@/types";
import { AdminTopbar } from "../../admin/_components/Topbar";
import { TenantSidebar } from "./TenantSidebar";
import { TenantTopbar } from "./TeantTopbar";

const TenantShill = ({
  user,
  children,
}: {
  user: IUser; 
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <TenantSidebar
        user={user}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <TenantTopbar onMobileMenuClick={() => setIsOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  );
};

export default TenantShill;