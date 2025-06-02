import Image from "@/components/common/Image"
import { Circle } from "lucide-react"

import Nischal from "@/assets/nischal.png"
import { getStatusColor } from "@/constants/status-class";
import { getPriorityColor } from "@/constants/priority-class";

type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  status?: string;
  priority?: string;
};

const ToDoCard = ({ task }: { task: Task }) => {
  return (
    <div className="flex border border-gray-400 mt-3 p-3 rounded-2xl">
      <div>
        <Circle className="text-destructive mr-4 w-4 h-4" />
      </div>
      <div className="content flex flex-col text-left ">
        <div className="flex mb-8 mr-2">
          <div className="flex flex-col w-4/5">
            <h5 className="mb-3 truncate font-extrabold">{task.title}</h5>
            <p className="text-sm mr-3 opacity-70 clamp-4">{task.description}.</p>
          </div>
          <div className="w-22 h-22 mt-7">
            <Image src={Nischal} alt="Nischal" />
          </div>
        </div>
        <div className="flex text-[10px]">
          <p className="mr-3">Priority: <span className={getPriorityColor(task.priority || "")}>{task.priority}</span></p>
          <p className="mr-3">Status: <span className={getStatusColor(task.status || "")}>{task.status}</span></p>
          <p>Created on: {task.createdAt}</p>
        </div>
      </div>
    </div>
  )
}

export default ToDoCard
