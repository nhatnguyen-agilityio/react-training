import { useGetProductDetail } from '../../../apis/product-detail';
import type { CartInterface } from '../../../interfaces/cart';
import Image from '../../common/Image';
import { Input } from '../../ui/input';
import { Skeleton } from '../../ui/skeleton';
import { TriangleAlert } from 'lucide-react';
import type { ProductVariant } from '../../../interfaces/products';
import { useCallback, useEffect, useState } from 'react';
import { useUpdateCart } from '../../../apis/update-cart';

const CartItem = ({ cartItem }: { cartItem: CartInterface }) => {
  const [quantityValue, setQuantityValue] = useState<number>(1);
  const productId = cartItem.items[0].productId;
  const variantId = cartItem.items[0].variantId;

  const {
    data: productDetail,
    isPending,
    isError,
  } = useGetProductDetail(String(productId) || '', !!productId);

  const { mutate } = useUpdateCart();

  useEffect(() => {
    setQuantityValue(cartItem.items[0].quantity);
  }, [cartItem]);

  const handleChangeQuantity = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuantityValue(Number(e.target.value));

      const updatedCart = {
        ...cartItem,
        items: cartItem.items.map((item, idx) =>
          idx === 0 ? { ...item, quantity: Number(e.target.value) } : item,
        ),
      };

      mutate({ cartId: cartItem.id || 0, cartPayload: updatedCart }, {});
    },
    [cartItem, mutate],
  );

  if (isPending) {
    return (
      <div className="ml-3 mr-4 flex justify-between mb-10 pb-10 border-b-1 border-gray-300">
        <div className="flex">
          <Skeleton className="h-25 w-25 md:w-30 md:h-30 lg:w-36 lg:h-36 flex-shrink-0" />
          <div className="ml-3 flex flex-1 flex-col justify-between">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-2 hidden md:block" />
            <Skeleton className="h-5 w-5 rounded-full" />
          </div>
        </div>
        <div className="flex flex-col justify-between lg:items-end ml-3">
          <Skeleton className="h-6 w-20 mb-2" />
          <Skeleton className="h-12 w-12" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="ml-3 mr-4 flex justify-between mb-10 pb-10 border-b-1 border-gray-300">
        <div className="flex flex-col items-center justify-center w-full min-h-32 text-center">
          <div className="mb-4">
            <TriangleAlert className="w-12 h-12 text-red-500 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Failed to load product
          </h3>
          <button
            onClick={() => window.location.reload()}
            className="text-sm text-app-primary hover:underline"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  const cartVariant = productDetail.variants.find(
    (variant: ProductVariant) => variant.id === variantId,
  );

  return (
    <div className="ml-3 mr-4 flex justify-between mb-10 pb-10 border-b-1 border-gray-300">
      <div className="flex">
        <div className="h-25 w-25 md:w-30 md:h-30 lg:w-36 lg:h-36 flex-shrink-0 flex justify-center items-center bg-background-primary">
          <Image
            src={
              cartVariant?.images[0]?.url ||
              productDetail.variants[0].images[0].url
            }
            alt={
              cartVariant?.images[0]?.alt ||
              productDetail.variants[0].images[0].alt
            }
            className="w-3/5 h-3/5 object-contain"
          />
        </div>
        <div className="ml-3 flex flex-1 flex-col justify-between">
          <h3 className="font-medium line-clamp-2">{productDetail.name}</h3>
          <p className=" hidden w-full md:line-clamp-2">
            {productDetail.description}
          </p>
          <div className="flex mb-2">
            <div
              className="h-5 w-5 rounded-full mr-3"
              style={{ backgroundColor: cartVariant.hex }}
            ></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:items-end ml-3">
        <p className="text-app-primary font-semibold text-sm md:text:lg lg:text-xl">
          {`$${(productDetail.price * cartItem.items[0].quantity).toFixed(2)}`}
        </p>
        <div className="h-12 w-12 mr-4 lg:mr-0 flex items-end">
          <Input
            type="number"
            min={1}
            max={100}
            value={quantityValue}
            onChange={handleChangeQuantity}
            className="bg-background-primary rounded-2xl p-0 text-center lg:pl-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
