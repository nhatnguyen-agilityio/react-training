import type { Task } from "@/types/Task"
import Image from "../common/Image"

import githubImage from "@/assets/github.png"
import { getPriorityColor } from "@/constants/priority-class"
import { getStatusColor } from "@/constants/status-class"

const MyTaskDetail = ({ task }: { task: Task}) => {
  return (
    <>
      <div className="flex text-left">
        <div className="w-36 h-36 mr-4 min-w-36">
          <Image src={task.image || githubImage} alt="Task" className="h-full w-full" />
        </div>
        <div className="flex flex-col justify-end">
          <h4 className="text-md font-extrabold mb-3">{task.title}</h4>
          <p className="mb-3 text-sm">Priority: <span className={getPriorityColor(task.priority || "")}>{task.priority}</span></p>
          <p className="text-sm">Status: <span className={getStatusColor(task.status || "")}>{task.status}</span></p>
          <p className="text-[10px] mt-3 text-gray-400 flex">Created on: {task.createdAt}</p>
        </div>
      </div>
      <p className="mt-7 text-left">{task.description}</p>
    </>
  )
}

export default MyTaskDetail
