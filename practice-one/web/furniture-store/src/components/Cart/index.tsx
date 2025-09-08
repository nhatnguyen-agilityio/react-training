import { Link } from 'react-router-dom';
import Checkout from '../Checkout';
import Image from '../common/Image';
import Sidebar from '../Sidebar';
import { Button } from '../ui/button';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = 0;
  return (
    <>
      <div className="px-2 flex flex-col items-center md:w-4/5 mx-auto lg:px-7">
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
      </div>
      {cartItems > 0 ? (
        <div className="sticky bottom-0">
          <Sidebar
            button={
              <Button className="w-full h-14 bg-app-primary rounded-none text-white text-lg font-semibold hover:bg-app-tertiary">
                Next
              </Button>
            }
            children={<Checkout />}
            title="Checkout"
          />
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
  );
};

export default Cart;
