import Logo from "./Logo";
import Menu from "./Menu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-23 bg-white text-primary-100">
      <div className="2xl:max-w-[1440px] mx-auto flex border-b-1 border-b-gray-200 h-full">
        <Logo />
        <Navbar />
        <Menu />
      </div>
    </div>
  );
}
export default Header;
