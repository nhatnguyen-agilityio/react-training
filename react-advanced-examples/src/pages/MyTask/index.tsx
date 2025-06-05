import Tasks from "@/components/Tasks";
import type { Task } from "@/types/Task";
import { useEffect, useState } from "react";

const MyTask =  () => {
  const [listTasks, setListTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Call API to fetch the list of tasks
  useEffect(() => {
    const listTasks = async () => {
      try {
        const response = await fetch("https://683417dd464b499636014699.mockapi.io/api/v1/tasks?page=1&limit=4");
        const data = await response.json();
        setListTasks(data);
        console.log("data", data);
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      } finally {
        setIsLoading(false);
      }
    }

    listTasks();
  }, []);

  // Render the loading if API call is in progress
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Render the list of tasks
  return (
    <Tasks listTasks={listTasks} />
  );
};

export default MyTask;
