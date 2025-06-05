import type { Task } from "@/types/Task"
import MyTaskDetail from "../MyTaskDetail"
import ToDoCard from "../ToDoCard"
import { useEffect, useState } from "react";

const Tasks = ({ listTasks = [], onChangeTask }: { listTasks: Task[], onChangeTask: () => void}) => {
  const [taskDetail, setTaskDetail] = useState<Task>(listTasks[0]);
  const [taskId, setTaskId] = useState<string>(listTasks[0].id);

  useEffect(() => {
    const currentTask = listTasks.find(task => task.id === taskId);

    if (currentTask) {
      setTaskDetail(currentTask);
    }
  }, [listTasks, taskId]);

  return (
    <div className="grid grid-cols-2 gap-5 min-h-200 mt-15">
      <div className="shadow-md border border-gray-300 rounded-md p-5">
        <h4 className="text-xl font-bold text-left"><span className="underline underline-offset-6 decoration-2 decoration-orange-700">My </span>Tasks</h4>
        <div className="mt-5">
          {listTasks.map((task) => (
            <div onClick={() => setTaskId(task.id)} className="cursor-pointer" key={task.id}>
              <ToDoCard key={task.id} task={task} />
            </div>
          ))}
        </div>
      </div>
      <div className="shadow-md border border-gray-300 rounded-md p-5 flex flex-col">
        <MyTaskDetail task={taskDetail} onChangeTask={onChangeTask} />
      </div>
    </div>
  )
}

export default Tasks
