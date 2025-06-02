import { ClipboardList, Plus } from "lucide-react"
import ToDoCard from "./ToDoCard"

type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  status?: string;
  priority?: string;
};

interface ToDoTaskProps {
  todoTasks: Task[];
}

const ToDoTask: React.FC<ToDoTaskProps> = ({ todoTasks }) => {
  return (
    <div className="shadow-xl px-4 py-6">
      <div className="header flex justify-between px-3">
        <div className="title flex">
          <ClipboardList />
          <span className="text-destructive">To-Do</span>
        </div>
        <div className="add-task flex text-xs flex items-center">
          <Plus width={12} height={12} className="text-destructive" />
          <span className="ml-1">Add task</span>
        </div>
      </div>
      <div className="mt-6 border-b-2 pb-8">
        {todoTasks.slice(0, 2).map((task) => (
          <ToDoCard key={task.id} task={task} />
        ))}
      </div>
      <div className="pt-6">
        {todoTasks.slice(2).map((task) => (
          <ToDoCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default ToDoTask
