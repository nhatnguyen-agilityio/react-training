import { AlignJustify } from 'lucide-react';
import { Toaster } from '../components/ui/sonner';
import CartButton from '../components/CartButton';
import Image from '../components/common/Image';
import GetStarted from '../components/GetStarted';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import Cart from '../components/Cart';
import { useState } from 'react';
import Checkout from '../components/Checkout';
import Payment from '../components/Payment';
import OrderSuccess from '../components/OrderSuccess';
import SignUp from '../components/SignUp';

const Main = () => {
  const [step, setStep] = useState<
    | 'closed'
    | 'cart'
    | 'checkout'
    | 'payment'
    | 'orderSuccess'
    | 'login'
    | 'signup'
  >('closed');

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
          <Sidebar
            open={step !== 'closed'}
            onOpenChange={(open) => {
              if (!open) setStep('closed');
            }}
            button={
              <>
                <CartButton
                  onClick={(e) => {
                    e.preventDefault();
                    setStep('cart');
                  }}
                />
                <GetStarted
                  onClick={(e) => {
                    e.preventDefault();
                    setStep('login');
                  }}
                />
              </>
            }
            title={
              step === 'cart'
                ? 'Cart'
                : step === 'checkout'
                  ? 'Checkout'
                  : step === 'payment'
                    ? 'Payment'
                    : ''
            }
          >
            {step === 'cart' && (
              <Cart
                onNext={() => setStep('checkout')}
                onLogin={() => setStep('login')}
              />
            )}
            {step === 'checkout' && (
              <Checkout
                onNext={() => setStep('payment')}
                onLogin={() => setStep('login')}
              />
            )}
            {step === 'payment' && (
              <Payment onNext={() => setStep('orderSuccess')} />
            )}
            {step === 'orderSuccess' && (
              <OrderSuccess onBack={() => setStep('closed')} />
            )}
            {step === 'login' && <Login onNext={() => setStep('signup')} />}
            {step === 'signup' && <SignUp onNext={() => setStep('login')} />}
          </Sidebar>
        </div>
        <AlignJustify className="w-6 h-6 lg:hidden" />
      </header>
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Main;
