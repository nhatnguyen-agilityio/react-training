import { useMemo, useState } from 'react';
import { GetProductsInfinite } from '../../apis/products';
import type { ProductInterface } from '../../interfaces/products';
import ShowMore from '../common/ShowMore';
import FilterDropdown from '../FilterDropdown';
import ProductItem from '../ProductItem';
import { Progress } from '../ui/progress';
import { Skeleton } from '../ui/skeleton';
import { Loader2 } from 'lucide-react';

const TopProducts = ({
  categoryId,
  searchProducts = '',
}: {
  categoryId?: string | null;
  searchProducts?: string | null;
}) => {
  const [position, setPosition] = useState('mostRecent');

  const pageSize = 20;
  const {
    data,
    isPending,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = GetProductsInfinite(pageSize, position, categoryId, searchProducts);

  const items: ProductInterface[] = useMemo(() => {
    return data?.pages?.flat?.() ?? [];
  }, [data]);

  if (isPending) {
    return (
      <div className="mt-6 md:mt-12 container">
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="text-left text-xl md:text-4xl font-bold mb-4 my-auto">
            Top Products
          </p>
          <div className="flex justify-start">
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="mt-6">
              <div className="bg-background-primary min-h-48 md:min-h-78 flex items-center relative">
                <Skeleton className="w-3/5 h-40 md:h-56 mx-auto" />
              </div>
              <div className="flex justify-between items-center my-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-7 w-16 rounded-2xl" />
              </div>
              <div className="flex">
                <Skeleton className="w-7 h-7 mr-4 rounded-full" />
                <Skeleton className="w-7 h-7 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:w-1/2 mx-auto">
          <div>
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="mt-6 h-1 w-full" />
          <div className="mt-6 flex justify-center">
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 md:mt-12 container">
        <p className="text-left text-xl font-bold mb-2 md:mb-5 md:text-4xl">
          Products
        </p>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 md:mt-12 container">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="text-left text-xl md:text-4xl font-bold mb-4 my-auto">
          Top Products
        </p>
        <div className="flex justify-start">
          <FilterDropdown position={position} setPosition={setPosition} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {items.map((product: ProductInterface) => {
          const firstVariant = product.variants && product.variants[0];
          const firstImage =
            firstVariant && firstVariant.images && firstVariant.images[0];
          if (!firstVariant || !firstImage) return null;
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={firstImage.url}
              imageAlt={firstImage.alt}
            />
          );
        })}
      </div>
      <div className="mt-8 md:w-1/2 mx-auto">
        <p>Showing {items.length} of 100 results</p>
        <Progress value={hasNextPage ? 50 : 100} className="mt-6 h-1" />
        {isFetchingNextPage && (
          <div className="flex items-center gap-2 my-4 justify-center">
            <Loader2 className="h-8 w-8 text-app-primary animate-spin" />
            <p className="text-app-primary">Loading more...</p>
          </div>
        )}
        <ShowMore
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        />
      </div>
    </div>
  );
};

export default TopProducts;
