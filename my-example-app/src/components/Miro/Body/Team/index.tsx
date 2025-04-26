import Button from "../../Common/button"
import Title from "../../Common/title"
import TeamMember from "./TeamMember"

const Team = () => {
  return (
    <div className="mt-[60px] w-4/5 mx-auto">
      <Title title={"Loved by the world's best teams"} />
      <Button
        text={"See all customer stories →"}
        className={"bg-white text-[#4262FF] border rounded-[20px] border-[#4262FF] py-2 px-4 text-[18px] mt-[25px]"}
        onClick={() => alert("This feature will be available soon!")}
      />
      <TeamMember />
    </div>
  )
}

export default Team
