import type { Task } from "@/types/Task";
import { Suspense, useCallback, useEffect, useState } from "react";
import { lazy } from "react";

const Tasks = lazy(() => import("@/components/Tasks"));

const MyTask =  () => {
  const [loadTasks, setLoadTasks] = useState<{
    listTasks: Task[];
    isLoading: boolean;
  }>({
    listTasks: [],
    isLoading: true,
  });

  const [refresh, setRefresh] = useState(0);

  // Call API to fetch the list of tasks
  useEffect(() => {
    const listTasks = async () => {
      try {
        const response = await fetch("https://683417dd464b499636014699.mockapi.io/api/v1/tasks?page=1&limit=4&sortBy=createdAt&order=desc");
        const data = await response.json();
        setLoadTasks({ listTasks: data, isLoading: false });
      } catch (error) {
        console.error("Failed to fetch tasks", error);
      }
    }

    listTasks();
  }, [refresh]);

  const handleChangeTask = useCallback(() => {
    console.log("handleChangeTask");
    setRefresh(prev => prev + 1);
  }, []);

  // Render the loading if API call is in progress
  if (loadTasks.isLoading) {
    return <div>Loading...</div>;
  }

  // Render the list of tasks
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Tasks listTasks={loadTasks.listTasks} onChangeTask={handleChangeTask} />
    </Suspense>
  );
};

export default MyTask;
