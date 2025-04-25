import About from "./About";
import OurWorksTitle from "./OurWorksTitle";

const OurWorks = () => {
  return (
    <div className="w-full h-[923px] bg-[#FFD02F] flex items-center justify-center">
      <div className="w-4/5 mx-auto h-4/5 flex flex-col items-center">
        <OurWorksTitle />
        <About />
      </div>
    </div>
  );
}

export default OurWorks;
