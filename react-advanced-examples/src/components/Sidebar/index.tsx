import { CircleAlert, LayoutDashboard, BookCheck, Settings, BadgeHelp, Logs, LogOut } from "lucide-react"
import { Sidebar as UISidebar, SidebarHeader as UISidebarHeader, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarFooter } from "@/components/ui/sidebar";
import { useAuth } from "@/Hooks/Auth";
import SidebarHeader from "../SidebarHeader";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: LayoutDashboard,
  },
  {
    title: "Vital Task",
    url: "#",
    icon: CircleAlert,
  },
  {
    title: "My Task",
    url: "#",
    icon: BookCheck,
  },
  {
    title: "Task Categories",
    url: "#",
    icon: Logs,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Help",
    url: "#",
    icon: BadgeHelp,
  },
]

const Sidebar = () => {
  const auth = useAuth();

  return (
    <div>
      <UISidebar>
        <UISidebarHeader>
          <SidebarHeader />
        </UISidebarHeader>
        <SidebarContent className="bg-sidebar-primary text-sidebar-primary-foreground mt-13 pt-16">
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="h-15 hover:text-destructive pl-6">
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-sidebar-primary text-sidebar-primary-foreground pb-7">
          <SidebarMenuButton className="pl-6" onClick={auth.logout}>
            <LogOut />
            <span>Logout</span>
          </SidebarMenuButton>
        </SidebarFooter>
      </UISidebar>
    </div>
  )
}

export default Sidebar
