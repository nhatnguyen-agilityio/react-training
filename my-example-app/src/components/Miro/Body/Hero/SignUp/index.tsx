import Button from "../../../Common/button";
import Input from "../../../Common/input";
import RateStar from "./RateStar";

const SignUp = () => {
  return (
    <div className="flex w-3/7 flex-col text-left">
      <h2 className="text-[48px] font-bold leading-[56px] mt-[5px]">Take ideas from better to best</h2>
      <p className="text-[18px] my-[25px] w-4/5 font-light">Miro is your team's visual platform to connect, collaborate, and create - together</p>
      <form className="flex flex-col w-9/10">
        <Input
          type="email"
          value=""
          placeholder="Enter your email"
          className="h-[48px] px-[15px] mb-[15px] border rounded-[32px] border-border-100"
          onChange={(e) => console.log(e.target.value)}
        />
        <Button text={"Sign up free"} className={"mb-[5px] h-[51px] text-[18px] font-normal rounded-[32px] bg-button-100 hover:bg-blue-700 text-white py-2 px-4"} onClick={() => alert("This feature will be available soon!")} />
        <p className="text-[14px] font-light">Collaborate with your team withing minutes</p>
      </form>
      <RateStar />
    </div>
  );
}

export default SignUp;
