"use client";

import { useState } from "react";
import { AdminSidebar } from "./Sidebar";
import { AdminTopbar } from "./Topbar";
import { IUser } from "@/types";

const AdminShell = ({
  user,
  children,
}: {
  user: IUser; 
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <AdminSidebar
        user={user}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AdminTopbar onMobileMenuClick={() => setIsOpen(true)} />
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminShell;