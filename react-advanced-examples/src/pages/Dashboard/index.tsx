import Image from "@/components/common/Image";
import CompletedTask from "@/components/CompletedTask";
import Sidebar from "@/components/Sidebar";
import TaskStatus from "@/components/TaskStatus";
import ToDoTask from "@/components/ToDoTask";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { useAuth } from "@/hooks/Auth";
import { Hand, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

import InviteImage from "@/assets/Invite.png"

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container">
      <SidebarProvider className="w-full h-auto min-h-auto">
        <Sidebar />
        <SidebarInset className="rounded-none border-none">
          <div className="mb-8 flex justify-between">
            <h5 className="flex">Welcome back, {user?.username} <Hand className="ml-2 text-yellow-300" /></h5>
            <div className="flex items-center">
              <div className="flex mr-5">
                <Image src={InviteImage} alt="Invite" className="mr-2" />
                <Image src={InviteImage} alt="Invite" className="mr-2" />
                <Image src={InviteImage} alt="Invite" className="mr-2" />
                <Image src={InviteImage} alt="Invite" className="mr-2" />
                <Image src={InviteImage} alt="Invite" />
              </div>
              <Button className="mt-0 bg-background text-destructive border border-destructive rounded-sm">
                <UserPlus />
                Invite
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 w-full border border-gray-300 px-6 py-8 rounded-xl">
            <ToDoTask />
            <div className="ml-3">
              <TaskStatus />
              <CompletedTask />
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}

export default Dashboard
