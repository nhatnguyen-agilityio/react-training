import Image from "@/components/common/Image"
import { Circle } from "lucide-react"

import Nischal from "@/assets/nischal.png"

const ToDoCard = () => {
  return (
    <div className="flex border border-gray-400 mt-3 p-3 rounded-2xl">
      <Circle className="text-destructive mr-4" />
      <div className="content flex flex-col text-left ">
        <div className="flex mb-8">
          <div className="flex flex-col w-8/10">
            <h5 className="mb-3">Attend Nischal's Birthday Party</h5>
            <p className="text-sm mr-3">Buy gifts on the way and pick up cake from the bakery. (6 PM | Fresh Elements).....</p>
          </div>
          <div className="w-22 h-22 mt-7 mr-5">
            <Image src={Nischal} alt="Nischal" />
          </div>
        </div>
        <div className="flex text-[10px]">
          <p className="mr-3">Priority: <span className="text-chart-2">Moderate</span></p>
          <p className="mr-3">Status: <span className="text-destructive">Not Started</span></p>
          <p>Created on: 20/06/2023</p>
        </div>
      </div>
    </div>
  )
}

export default ToDoCard
