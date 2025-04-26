import Collaborate from "./Collaborate";
import ConnectTools from "./ConnectTools";
import CreativeIdeas from "./CreativeIdeas";
import Hero from "./Hero";
import OurWorks from "./OurWorks";
import Partner from "./Partner";
import Team from "./Team";
import Tools from "./Tools";
import WorkTogether from "./WorkTogether";

const Body = () => {
  return (
    <div className="text-primary-100">
      <Hero />
      <Partner />
      <Collaborate />
      <WorkTogether />
      <ConnectTools />
      <CreativeIdeas />
      <Tools />
      <OurWorks />
      <Team />
    </div>
  );
}
export default Body;
