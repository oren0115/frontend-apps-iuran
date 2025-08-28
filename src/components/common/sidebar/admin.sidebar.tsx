import { Calendar, Home, Inbox, Search, Settings, Users } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

// Menu items
const items = [
  { title: "Dashboard", url: "/admin/dashboard", icon: Home },
  { title: "Kelola Users", url: "/admin/users", icon: Users },
  { title: "Kelola Iuran", url: "/admin/iuran", icon: Inbox },
  { title: "Verifikasi", url: "/admin/verifikasi", icon: Calendar },
  { title: "Reports", url: "/admin/reports", icon: Search },
  { title: "Settings", url: "/admin/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isOpen = state === "expanded"; // ambil state dari provider

  return (
    <Sidebar
      className={`${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300 bg-white border-r`}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {isOpen ? "Admin Dashboard" : "AD"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon size={20} />
                      {/* Hanya tampilkan teks saat open */}
                      {isOpen && <span>{item.title}</span>}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
