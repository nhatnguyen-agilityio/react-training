import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const Cart = () => {
  const [cartCount, setCartCount] = useState(3);

  return (
    <>
      <button className="relative p-5 mr-5 bg-app-secondary rounded-full hover:bg-gray-200 transition">
        <ShoppingCart className="w-6 h-6 text-app-primary" />
        {cartCount > 0 && (
          <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </>
  );
};

export default Cart;
