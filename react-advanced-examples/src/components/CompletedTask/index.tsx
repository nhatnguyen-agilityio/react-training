import { BookmarkCheck } from "lucide-react"
import ToDoCard from "../ToDoTask/ToDoCard"

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

const CompletedTask: React.FC<ToDoTaskProps> = ({ todoTasks }) => {
  return (
    <div className="mt-4 shadow-xl p-3">
      <div className="flex">
        <BookmarkCheck />
        <span className="text-destructive">Completed Tasks</span>
      </div>
      <div className="p-1">
        {todoTasks.map((task) => (
          <ToDoCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default CompletedTask
