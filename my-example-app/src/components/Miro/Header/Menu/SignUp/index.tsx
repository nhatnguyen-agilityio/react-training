import Button from "../../../Common/button";

const SignUp = () => {
  const handleSignUp = () => {
    alert("This feature will be available soon!");
  };

  return (
    <div>
      <Button text={"Sign up free"} onClick={handleSignUp} />
    </div>
  );
}

export default SignUp;
