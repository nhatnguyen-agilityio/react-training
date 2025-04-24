import Logo from "./Logo";
import Menu from "./Menu";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-[91px] bg-white flex text-primary-100 border-b-[1px] border-b-gray-200">
      <Logo />
      <Navbar />
      <Menu />
    </div>
  );
}
export default Header;
