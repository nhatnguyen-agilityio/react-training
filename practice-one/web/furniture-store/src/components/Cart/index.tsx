import Checkout from '../Checkout';
import Sidebar from '../Sidebar';
import { Button } from '../ui/button';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <>
      <div className="px-2 flex flex-col items-center md:w-4/5 mx-auto lg:px-7">
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="sticky bottom-0 ">
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
    </>
  );
};

export default Cart;
