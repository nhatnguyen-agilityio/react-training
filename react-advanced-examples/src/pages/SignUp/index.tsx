import SignUpBanner from "@/components/SignUpBanner";

const SignUp = () => {
  return (
    <div className="container h-216 bg-[url(assets/login-background.png)] grid grid-cols-2 items-center">
      <div className="flex flex-col h-full">
        <SignUpBanner />
      </div>
    </div>
  );
}

export default SignUp
