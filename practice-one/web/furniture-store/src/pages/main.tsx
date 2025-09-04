import { AlignJustify } from 'lucide-react';
import Cart from '../components/Cart';
import Image from '../components/common/Image';
import GetStarted from '../components/GetStarted';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, Outlet } from 'react-router-dom';

const Main = () => {
  return (
    <>
      <header className="flex justify-between items-center container">
        <h1>
          <Link to="/">
            <Image
              src="https://ucarecdn.com/1394912f-7999-4eae-ad41-8f21805d50bd/branding.png"
              alt="logo"
            />
          </Link>
        </h1>
        <div className="hidden lg:block">
          <Navbar />
        </div>
        <div className="hidden lg:flex">
          <Cart />
          <GetStarted />
        </div>
        <AlignJustify className="w-6 h-6 lg:hidden" />
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
