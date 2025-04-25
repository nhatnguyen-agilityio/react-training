import Collaborate from "./Collaborate";
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
    </div>
  );
}
export default Body;
