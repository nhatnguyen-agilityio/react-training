import Banner from "./Banner";
import SignUp from "./SignUp";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="container">
        <div className="flex justify-between w-[1140px] mt-[60px] mx-auto">
          <SignUp />
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default Hero;
