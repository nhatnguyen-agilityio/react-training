import { BookmarkCheck } from "lucide-react"
import ToDoCard from "../ToDoTask/ToDoCard"
import { useEffect, useState } from "react";
import type { Task } from "@/types/Task";

const CompletedTask= () => {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("https://683417dd464b499636014699.mockapi.io/api/v1/tasks?status=Completed&page=1&limit=2")
    .then((response) => response.json())
    .then((data) => {
      setCompletedTasks(data);
    })
  }, []);

  return (
    <div className="mt-4 shadow-xl p-3">
      <div className="flex">
        <BookmarkCheck />
        <span className="text-destructive">Completed Tasks</span>
      </div>
      <div className="p-1">
        {completedTasks.map((task) => (
          <ToDoCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default CompletedTask
