import { Link } from 'react-router-dom';
import Image from '../common/Image';
import { Button } from '../ui/button';
import CartItem from './CartItem';

const Cart = ({
  onNext,
  onLogin,
}: {
  onNext: () => void;
  onLogin: () => void;
}) => {
  const cartItems = 6;
  const isLogin = true;

  console.log('come to this component');

  return (
    <>
      <div className="px-2 flex flex-col items-center md:w-4/5 mx-auto lg:px-7">
        {isLogin ? (
          <>
            {cartItems > 0 ? (
              <>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
              </>
            ) : (
              <div className="mt-15 text-center text-2xl">
                <p>Your cart is empty</p>
                <div className="mt-5 w-3/5 h-3/5 mx-auto">
                  <Image
                    src="https://ucarecdn.com/7c8fb29d-1c6e-43bd-af7e-dbb55c271c1f/Squircle.png"
                    alt="Squircle"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
          </>
        ) : (
          <>
            <div className="mt-15 text-center text-2xl">
              <p>Your need login to see your cart</p>
              <div className="mt-5 w-3/5 h-3/5 mx-auto">
                <Image
                  src="https://ucarecdn.com/7c8fb29d-1c6e-43bd-af7e-dbb55c271c1f/Squircle.png"
                  alt="Squircle"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </>
        )}
      </div>
      {isLogin ? (
        <>
          {cartItems > 0 ? (
            <div
              className={`${cartItems < 4 ? 'fixed bottom-0 left-0 right-0' : 'sticky bottom-0'}`}
            >
              <Button
                onClick={onNext}
                className="w-full h-14 bg-app-primary rounded-none text-white text-lg font-semibold hover:bg-app-tertiary"
              >
                Next
              </Button>
            </div>
          ) : (
            <div className="fixed bottom-0 left-0 right-0">
              <Link to="/products">
                <Button className="w-full h-14 bg-app-primary rounded-none text-white text-lg font-semibold hover:bg-app-tertiary">
                  SHOP ALL
                </Button>
              </Link>
            </div>
          )}
        </>
      ) : (
        <div className="fixed bottom-0 left-0 right-0">
          <Button
            onClick={onLogin}
            className="w-full h-14 bg-app-primary rounded-none text-white text-lg font-semibold hover:bg-app-tertiary"
          >
            Login
          </Button>
        </div>
      )}
    </>
  );
};

export default Cart;
