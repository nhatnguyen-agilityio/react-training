import Banner from "./Banner";
import Content from "./Content";

import banner from "../../../assets/brainstorm.png"

const BuiltBody = () => {
  return (
    <div className="flex w-full justify-between mt-[20px]">
      <Content title={"Brainstorming"} description={"Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on."} />
      <Banner bannerImage={banner} />
    </div>
  )
}
export default BuiltBody;
