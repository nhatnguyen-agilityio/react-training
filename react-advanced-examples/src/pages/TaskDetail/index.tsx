import Image from "@/components/common/Image";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import Nischal from "@/assets/nischal.png"
import { useEffect, useState } from "react";
import type { Task } from "@/types/Task";
import { getPriorityColor } from "@/constants/priority-class";
import { getStatusColor } from "@/constants/status-class";
import { Skeleton } from "@/components/ui/skeleton";


const TaskDetail = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const [taskDetail, setTaskDetail] = useState<Task | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTaskDetail = async () => {
      try {
        const response = await fetch(`https://683417dd464b499636014699.mockapi.io/api/v1/tasks/${taskId}`);
        const data = await response.json();
        setTaskDetail(data);
      } catch (error) {
        console.error("Failed to fetch task detail", error);
      } finally {
        setLoading(false);
      }
    };

    if (taskId) {
      fetchTaskDetail();
    }
  }, [taskId]);

  return (
    <div>
      <div className="flex">
        <div className="h-50 w-50 mr-7">
          <Image src={taskDetail?.image || Nischal} alt="Task" className="w-full h-full" />
        </div>
        <div className="text-left">
          <h5 className="text-2xl font-extrabold">{loading ? <Skeleton /> : taskDetail?.title}</h5>
          <p className="text-xs mt-3">Priority: <span className={getPriorityColor(taskDetail?.priority || "")}>{taskDetail?.priority}</span></p>
          <p className="text-xs mt-3">Status: <span className={getStatusColor(taskDetail?.status || "")}>{taskDetail?.status}</span></p>
          <p className="text-[10px] mt-3 text-gray-300">Created on: {taskDetail?.createdAt}</p>
        </div>
        <NavLink to="/dashboard" className={"ml-auto text-blue-500"}>Go back</NavLink>
      </div>
      <p className="text-left mt-10">{taskDetail?.description}</p>
    </div>
  );
};

export default TaskDetail;
