import Image from "../common/Image"

import trashIcon from "@/assets/trash.svg"
import { Button } from "../ui/button"

const DeleteTask = ({ id, onDeleted }: { id: string, onDeleted: () => void }) => {
  const handleDeleteTask = () => {
    fetch(`https://683417dd464b499636014699.mockapi.io/api/v1/tasks/${id}`, {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        onDeleted()
      } else {
        console.error("Failed to delete task")
      }
    }).catch((error) => {
      console.error("Failed to delete task", error)
    })
  }

  return (
    <Button className="h-9 w-9 p-0 mr-3" onClick={handleDeleteTask}>
      <Image src={trashIcon} alt="Delete" className="w-auto h-auto cursor-pointer" />
    </Button>
  )
}

export default DeleteTask
