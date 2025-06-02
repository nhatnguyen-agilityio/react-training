import { ClipboardList, Plus } from "lucide-react"
import ToDoCard from "./ToDoCard"
import { useEffect, useState } from "react";

type Task = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  status?: string;
  priority?: string;
};

const ToDoTask = () => {
  const [todoItems, setTodoItems] = useState<Task[]>([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const [completedRes, inProgressRes] = await Promise.all([
        fetch("https://683417dd464b499636014699.mockapi.io/api/v1/tasks?status=Not%20Started&limit=3"),
        fetch("https://683417dd464b499636014699.mockapi.io/api/v1/tasks?status=In%20Progress&limit=3")
      ]);

      const [completedTasks, inProgressTasks] = await Promise.all([
        completedRes.json(),
        inProgressRes.json()
      ]);

      const combined = [...completedTasks, ...inProgressTasks]
        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
        .slice(0, 3); // only keep the top 3 sorted by createdAt

      setTodoItems(combined);
    };

    fetchTasks();
  }, []);

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
        {todoItems.slice(0, 2).map((task) => (
          <ToDoCard key={task.id} task={task} />
        ))}
      </div>
      <div className="pt-6">
        {todoItems.slice(2).map((task) => (
          <ToDoCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default ToDoTask
