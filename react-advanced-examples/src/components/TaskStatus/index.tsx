import { BookCheck } from "lucide-react";

const TaskStatus = () => {
  return (
    <div className=" shadow-xl p-3 mt-3">
      <div className="flex">
        <BookCheck />
        <span className="text-destructive">Task Status</span>
      </div>
      <div className="h-55"></div>
    </div>
  )
};

export default TaskStatus;
