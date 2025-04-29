import Button from "../../Common/button";
import Title from "../../Common/title";

const JoinUs = () => {
  const handleClick = () => {
    alert("This feature will be available soon!");
  }

  return (
    <div className="w-3/4 mb-[20px] text-white mx-auto mt-[30px] h-[448px] bg-primary-100">
      <div className="container flex flex-col justify-center items-center h-full">
        <Title title={"Join 45M+ users today"} className="text-white leading-[56px] text-[48px]" />
        <p className="opacity-60 mb-[15px] mt-[7px]">Start for free — upgrade anytime.</p>
        <a className="opacity-60 underline hover:text-blue-200" href="#">Joining as an organization? Contact Sales</a>
        <Button text="Sign up for free →" onClick={handleClick} className="mt-[35px] mb-[5px] h-[51px] text-[18px] font-normal rounded-[32px] bg-button-100 hover:bg-blue-700 text-white py-2 px-7" />
      </div>
    </div>
  )
};

export default JoinUs;
