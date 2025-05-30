import Sidebar from "@/components/Sidebar";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <SidebarProvider>
        <Sidebar />
        <main>
          <SidebarTrigger />
          <h2>Content</h2>
        </main>
      </SidebarProvider>
    </div>
  );
}

export default Dashboard
