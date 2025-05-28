import LoginBanner from "@/components/LoginBanner";
import LoginForm from "@/components/LoginForm";
import ThirdPartyLogin from "@/components/ThirdPartyLogin";

const Login = () => {
  return (
    <div className="container h-216 bg-[url(assets/login-background.png)] grid grid-cols-2 items-center">
      <div className="text-primary flex flex-col pl-5">
        <LoginForm />
        <ThirdPartyLogin />
      </div>
      <LoginBanner />
    </div>
  );
};

export default Login;
