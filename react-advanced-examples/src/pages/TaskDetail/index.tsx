import Image from "@/components/common/Image";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import Nischal from "@/assets/nischal.png"
import { useEffect, useState } from "react";
import type { Task } from "@/types/Task";
import { getPriorityColor } from "@/constants/priority-class";
import { getStatusColor } from "@/constants/status-class";
import { Skeleton } from "@/components/ui/skeleton";

import trashIcon from "@/assets/trash.svg"
import editIcon from "@/assets/edit.svg"


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
  }, [taskId, loading]);

  return (
    <div className="rounded-2xl shadow-sm border-1 p-4 min-h-210 flex flex-col">
      <div className="flex">
        <div className="h-50 w-50 mr-7">
          <Image src={taskDetail?.image || Nischal} alt="Task" className="w-full h-full" />
        </div>
        <div className="text-left">
          <h5 className="text-2xl font-extrabold">{loading ? <Skeleton className="w-70 rounded-lg mb-3 h-3 " /> : taskDetail?.title}</h5>
          <p className="text-xs mt-3 flex">Priority:{loading ? <Skeleton className="w-20 rounded-lg mb-3 h-3 ml-2" /> : <span className={`${getPriorityColor(taskDetail?.priority || "")} ml-2`}> {taskDetail?.priority}</span>}</p>
          <p className="text-xs mt-3 flex">Status: {loading ? <Skeleton className="w-20 rounded-lg mb-3 h-3 ml-2" /> : <span className={`${getStatusColor(taskDetail?.priority || "")} ml-2`}>{taskDetail?.status}</span>}</p>
          <p className="text-[10px] mt-3 text-gray-300 flex">Created on: {loading ? <Skeleton className="w-20 rounded-lg mb-3 h-3 ml-2" /> : new Date(taskDetail?.createdAt || "").toISOString().slice(0, 10)}</p>
        </div>
        <NavLink to="/dashboard" className={"ml-auto text-blue-500"}>Go back</NavLink>
      </div>
      <p className="text-left mt-10">{loading ? <Skeleton className="w-full rounded-lg mb-3 h-50" /> : taskDetail?.description}</p>
      <div className="mt-auto flex justify-end">
        <Image src={trashIcon} alt="Delete" className="w-auto h-auto mr-3 cursor-pointer" />
        <Image src={editIcon} alt="Edit" className="w-auto h-auto cursor-pointer" />
      </div>
    </div>
  );
};

export default TaskDetail;
