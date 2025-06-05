import type { Task } from "@/types/Task"
import MyTaskDetail from "../MyTaskDetail"
import ToDoCard from "../ToDoCard"
import { useState } from "react";

const Tasks = ({ listTasks = [] }: { listTasks: Task[]}) => {
  const [taskDetail, setTaskDetail] = useState<Task>(listTasks[0]);

  const handleChangeTask = (task: Task) => {
    setTaskDetail(task);
  }

  return (
    <div className="grid grid-cols-2 gap-5 min-h-200 mt-15">
      <div className="shadow-md border border-gray-300 rounded-md p-5">
        <h4 className="text-xl font-bold text-left"><span className="underline underline-offset-6 decoration-2 decoration-orange-700">My </span>Tasks</h4>
        <div className="mt-5">
          {listTasks.map((task) => (
            <div onClick={() => handleChangeTask(task)}>
              <ToDoCard key={task.id} task={task} />
            </div>
          ))}
        </div>
      </div>
      <div className="shadow-md border border-gray-300 rounded-md p-5">
        <MyTaskDetail task={taskDetail} />
      </div>
    </div>
  )
}

export default Tasks
