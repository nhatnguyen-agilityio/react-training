import { AlignJustify } from 'lucide-react';
import Image from '../components/common/Image';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart';
import GetStarted from '../components/GetStarted';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <>
      <header className="flex justify-between items-center">
        <h1>
          <Image
            src="https://ucarecdn.com/1394912f-7999-4eae-ad41-8f21805d50bd/branding.png"
            alt="logo"
          />
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
      <Hero />
    </>
  );
};

export default Home;
