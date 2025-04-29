import { useCallback, useEffect, useRef, useState } from "react";
import Button from "../../../Common/button";
import Input from "../../../Common/input";
import RateStar from "./RateStar";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSignUp = useCallback(() => {
    alert("Sign up with email: " + email);
  }, [email]);

  return (
    <div className="flex w-3/7 flex-col text-left">
      <h2 className="text-5xl font-bold leading-14 mt-1">Take ideas from better to best</h2>
      <p className="text-lg my-6 w-4/5 font-light">Miro is your team's visual platform to connect, collaborate, and create - together</p>
      <form className="flex flex-col w-9/10">
        <Input
          type="email"
          value={email}
          placeholder="Enter your email"
          className="h-12 px-4 mb-4 border rounded-4xl border-border-100"
          onChange={handleChange}
          ref={inputRef}
        />
        <Button text={"Sign up free"} className={"mb-1 h-13 text-lg font-normal rounded-4xl bg-button-100 hover:bg-blue-700 text-white py-2 px-4"} onClick={handleSignUp} />
        <p className="text-sm font-light">Collaborate with your team withing minutes</p>
      </form>
      <RateStar />
    </div>
  );
}

export default SignUp;
