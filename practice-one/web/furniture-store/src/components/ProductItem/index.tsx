import { ArrowRight } from 'lucide-react';
import Image from '../common/Image';
import { Button } from '../ui/button';
import { toast } from 'sonner';
import { Toaster } from '../ui/sonner';
import { useCallback, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';

const ProductItem = ({
  id,
  name,
  price,
  imageUrl,
  imageAlt,
}: {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
}) => {
  console.log("🚀 ~ ProductItem ~ imageAlt:", imageAlt)
  console.log("🚀 ~ ProductItem ~ imageUrl:", imageUrl)
  console.log("🚀 ~ ProductItem ~ price:", price)
  console.log("🚀 ~ ProductItem ~ name:", name)
  const handleAddToCart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Add to cart');
    toast('Product A has been added to your cart', {
      description: 'Sunday, December 03, 2023 at 9:00 AM',
      className: 'text-left',
      action: {
        label: 'View Cart',
        onClick: () => console.log('Undo'),
      },
    });
  }, []);

  return (
    <div className="mt-6">
      <Link to={`/products/${id}`}>
        <div className="bg-background-primary min-h-48 md:min-h-78 flex items-center relative group">
          <Image
            src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
            alt="product"
            className="w-3/5 h-3/5 object-contain mx-auto"
          />
          <Button
            variant="outline"
            onClick={handleAddToCart}
            className="absolute ml-4 mb-1 bg-app-tertiary border-none rounded-3xl text-white font-semibold py-6 hover:text-white hover:bg-app-primary bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            Add to cart
            <ArrowRight />
          </Button>
        </div>
        <div className="flex justify-between items-center my-2 font-bold">
          <p className="line-clamp-1 text-left">Modern Nightstand</p>
          <p className="px-4 py-1 bg-background-primary rounded-2xl">$225</p>
        </div>
        <div className="flex">
          <div className="w-7 h-7 mr-4 rounded-full bg-amber-400"></div>
          <div className="w-7 h-7 rounded-full bg-amber-400"></div>
        </div>
        <Toaster />
      </Link>
    </div>
  );
};

export default ProductItem;
