import Collaborate from "./Collaborate";
import ConnectTools from "./ConnectTools";
import CreativeIdeas from "./CreativeIdeas";
import Hero from "./Hero";
import Partner from "./Partner";
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
    </div>
  );
}
export default Body;
