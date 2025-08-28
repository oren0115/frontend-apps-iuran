import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/common/sidebar/admin.sidebar";
import React from "react";

type AdminLayoutProps = {
  children?: React.ReactNode; // Wajib ada children
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gray-50">
        {/* Sidebar */}
        <AppSidebar />

        {/* Main Content */}
        <main className="flex-1 p-4">
          <div className="flex items-center mb-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-xl font-semibold">Dashboard</h1>
          </div>
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}
