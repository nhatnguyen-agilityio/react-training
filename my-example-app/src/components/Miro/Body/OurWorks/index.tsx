import About from "./About";
import OurWorksTitle from "./OurWorksTitle";

const OurWorks = () => {
  return (
    <div className="w-full h-231 bg-[#FFD02F]">
      <div className="container flex items-center justify-center h-full">
        <div className="mx-auto h-4/5 flex flex-col items-center">
          <OurWorksTitle />
          <About />
        </div>
      </div>
    </div>
  );
}

export default OurWorks;
