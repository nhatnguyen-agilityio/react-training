import IntroductionContent from "../Introduction/IntroductionContent";
import IntroductionImage from "../Introduction/IntroductionImage";

import hybridWorkImage from "../../assets/hybrid-work.png";

const WorkTogether = () => {
  return (
    <div className="my-17.5 w-4/5 mx-auto ">
      <div className="container flex justify-between">
        <IntroductionContent
          title={"Work together, wherever you work"}
          description={"In the office, remote, or a mix of the two, with Miro, your team can connect, collaborate, and co-create in one space no matter where you are."}
          link={"#"}
          blockClass={"w-2/5 pr-5 flex flex-col justify-center"}
        />
        <IntroductionImage
          blockClass={"w-1/2 h-full flex justify-end mr-5"}
          src={hybridWorkImage}
          alt={"Hybrid Work"}
        />
      </div>
    </div>
  )
}

export default WorkTogether;
