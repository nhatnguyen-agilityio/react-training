import { BookmarkCheck } from "lucide-react"
import ToDoCard from "../ToDoTask/ToDoCard"

const CompletedTask = () => {
  return (
    <div className="mt-4 shadow-xl p-3">
      <div className="flex">
        <BookmarkCheck />
        <span className="text-destructive">Completed Tasks</span>
      </div>
      <div className="p-4">
        <ToDoCard />
        <ToDoCard />
      </div>
    </div>
  )
}

export default CompletedTask
