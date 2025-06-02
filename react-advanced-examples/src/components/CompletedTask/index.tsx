import { BookmarkCheck } from "lucide-react"
import ToDoCard from "../ToDoTask/ToDoCard"
import { useEffect, useState } from "react";
import type { Task } from "@/types/Task";
import { Skeleton } from "@/components/ui/skeleton";

const CompletedTask= () => {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch(
          "https://683417dd464b499636014699.mockapi.io/api/v1/tasks?status=Completed&page=1&limit=2"
        );
        const data = await response.json();
        setCompletedTasks(data);
      } catch (error) {
        console.error("Failed to fetch completed tasks", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTasks();
  }, []);

  return (
    <div className="mt-4 shadow-xl p-3">
      <div className="flex">
        <BookmarkCheck />
        <span className="text-destructive">Completed Tasks</span>
      </div>
      <div className="p-1">
        {loading
          ? Array.from({ length: 2 }).map((_, index) => (
            <Skeleton
              key={index}
              className="w-full rounded-lg mb-3 h-47"
            />
          ))
          : completedTasks.slice(0, 2).map((task) => (
            <ToDoCard key={task.id} task={task} />
          ))}
      </div>
    </div>
  )
}

export default CompletedTask
