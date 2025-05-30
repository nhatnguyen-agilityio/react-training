import { ClipboardList, Plus } from "lucide-react"
import ToDoCard from "./ToDoCard"

const ToDoTask = () => {
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
        <ToDoCard />
        <ToDoCard />
      </div>
      <div className="pt-6">
        <ToDoCard />
      </div>
    </div>
  )
}

export default ToDoTask
