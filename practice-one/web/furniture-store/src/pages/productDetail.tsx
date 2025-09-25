import { useState, useEffect, useCallback, type MouseEvent } from 'react';
import { Check, Box, Sprout, TriangleAlert } from 'lucide-react';
import Image from '../components/common/Image';
import BreadcrumbComponent from '../components/common/Breadcrumb';
import Button from '../components/common/Button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel';
import { Input } from '../components/ui/input';
import { Skeleton } from '../components/ui/skeleton';
import PeopleViewed from '../components/PeopleViewed';
import { useParams } from 'react-router-dom';
import { useGetProductDetail } from '../apis/product-detail';
import { useAddCart } from '../apis/add-cart';
import { GetMainCategories } from '../apis/main-categories';
import { toast } from 'sonner';
import type { ProductVariant } from '../interfaces/products';
import type { ImageInterface } from '../interfaces/image';
import { useAuth } from '../hooks/useAuth';
import NotFound from '../components/NotFound';

const ProductDetail = () => {
  const [selected, setSelected] = useState<number>(0);
  const [selectedVariantId, setSelectedVariantId] = useState<number | null>(
    null,
  );
  const [quantity, setQuantity] = useState<number>(1);
  const { id } = useParams<{ id: string }>();

  const { user } = useAuth();
  const { mutate, isLoading } = useAddCart();

  const {
    data: productDetail,
    isPending,
    isError,
    error,
  } = useGetProductDetail(id || '', !!id);

  const { data: mainCategories } = GetMainCategories();

  const getBreadcrumbItems = () => {
    const items: { label: string; href?: string; isCurrentPage?: boolean }[] = [
      { label: 'Homepage', href: '/' },
    ];

    if (productDetail && mainCategories) {
      const category = mainCategories.find(
        (cat: { id: number; name: string }) =>
          cat.id === productDetail.mainCategoryId,
      );
      if (category) {
        items.push({
          label: category.name,
          href: `/products?categoryId=${category.id}&categoryTitle=${encodeURIComponent(category.name)}`,
        });
      }

      items.push({
        label: productDetail.name,
        isCurrentPage: true,
      });
    }

    return items;
  };

  useEffect(() => {
    if (productDetail?.variants?.[0]) {
      setSelectedVariantId(productDetail.variants[0].id);
    }
  }, [productDetail]);

  const handleAddToCart = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (!user) {
        toast('You must be logged in to perform this action', {});
      }

      if (!user?.id || !selectedVariantId) return;

      const cartPayload = {
        userId: user.id,
        item: {
          productId: Number(id),
          variantId: selectedVariantId,
          quantity: quantity,
        },
      };
      mutate(cartPayload, {
        onSuccess: () => {
          toast(`Product ${productDetail?.name} has been added to your cart`, {
            className: 'text-left',
          });
        },
        onError: (error: unknown) => {
          if (
            (error as { message?: string })?.message === 'Insufficient stock'
          ) {
            const availableStock = productDetail.variants[selected]?.stock || 0;
            toast.error(
              `Sorry, only ${availableStock} item(s) available in stock for ${productDetail?.name}. Please help check to your cart`,
              {
                className: 'text-left',
              },
            );
          } else {
            toast('Failed to add product to cart. Please try again.', {
              className: 'text-left',
            });
          }
        },
      });
    },
    [
      id,
      mutate,
      user,
      selectedVariantId,
      productDetail?.name,
      productDetail?.variants,
      selected,
      quantity,
    ],
  );

  if (isPending) {
    return (
      <div className="mt-12">
        <BreadcrumbComponent
          className="container"
          items={[
            { label: 'Homepage', href: '/' },
            { label: <Skeleton className="h-4 w-24" /> },
            { label: <Skeleton className="h-4 w-32" />, isCurrentPage: true },
          ]}
        />

        <div className="container mt-4 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-7">
            <div className="flex justify-center mt-4 bg-background-primary py-4 md:hidden">
              <div className="w-full max-w-xs aspect-square">
                <Skeleton className="w-full h-full" />
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 gap-4 w-full">
              <Skeleton className="w-full h-90 lg:h-150" />
              <Skeleton className="w-full h-90 lg:h-150" />
              <Skeleton className="w-full h-90 lg:h-150" />
            </div>

            <div className="md:ml-4 mt-4 md:mt-0 text-left">
              <Skeleton className="h-8 w-3/4 mb-4" />

              <div className="flex items-center mt-2">
                <Skeleton className="h-4 w-20 mr-4" />
                <Skeleton className="h-4 w-16" />
              </div>

              <div className="flex mt-4 items-center">
                <Skeleton className="h-8 w-24 mr-3" />
                <Skeleton className="h-6 w-20 mr-3" />
                <Skeleton className="h-6 w-12" />
              </div>

              <div className="mt-4 space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>

              <div className="mt-10 flex justify-between">
                <div className="flex">
                  <Skeleton className="h-12 w-12 mr-3 rounded-2xl" />
                  <Skeleton className="h-12 w-12 mr-3 rounded-2xl" />
                  <Skeleton className="h-12 w-12 mr-3 rounded-2xl" />
                </div>
                <Skeleton className="h-12 w-12 mr-4 rounded-2xl" />
              </div>

              <div className="mt-10 w-full">
                <Skeleton className="w-full h-16 rounded-3xl" />
              </div>

              <div className="mt-12 space-y-6">
                <div className="flex">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex">
                  <Skeleton className="h-4 w-4 mr-2" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <PeopleViewed />
      </div>
    );
  }

  if (isError) {
    if (error?.message === 'Product not found') {
      return <NotFound />;
    }
    return (
      <div className="mt-12">
        <BreadcrumbComponent
          className="container"
          items={[
            { label: 'Homepage', href: '/' },
            { label: 'Product Detail', isCurrentPage: true },
          ]}
        />

        <div className="container mt-8">
          <div className="flex flex-col items-center justify-center min-h-96 text-center">
            <div className="mb-6">
              <TriangleAlert className="w-16 h-16 text-red-500 mx-aut" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Failed to load product
            </h2>
            <Button
              onClick={() => window.location.reload()}
              className="bg-app-primary hover:bg-app-tertiary text-white px-6 py-4 rounded-3xl"
            >
              Try Again
            </Button>
          </div>
        </div>
        <PeopleViewed />
      </div>
    );
  }

  return (
    <div className="mt-12">
      <BreadcrumbComponent className="container" items={getBreadcrumbItems()} />

      {/* Product content */}
      <div className="container mt-4 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-7">
          <div className="flex justify-center mt-4 bg-background-primary py-4 md:hidden">
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {productDetail.variants[0]?.images
                  ?.slice(0, 3)
                  .map((item: ImageInterface, index: number) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square w-full flex items-center justify-center">
                        <Image
                          src={item.url}
                          alt={item.alt}
                          width="320"
                          height="320"
                          className="w-full h-full object-contain"
                          loading={index === 0 ? 'eager' : 'lazy'}
                          fetchPriority={index === 0 ? 'high' : 'auto'}
                          sizes="(max-width: 768px) 320px, 320px"
                        />
                      </div>
                    </CarouselItem>
                  ))}
              </CarouselContent>
            </Carousel>
          </div>

          {/* Images display for tablet and desktop */}
          <div className="hidden md:grid grid-cols-1 gap-4 w-full">
            {productDetail.variants[0]?.images
              ?.slice(0, 3)
              .map((item: ImageInterface, index: number) => (
                <div
                  key={index}
                  className="w-full h-auto md:min-h-90 lg:min-h-150 flex justify-center items-center bg-background-primary"
                >
                  <Image
                    src={item.url}
                    alt={item.alt}
                    className="object-contain"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    fetchPriority={index === 0 ? 'high' : 'auto'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              ))}
          </div>
          <div className="md:ml-4 mt-4 md:mt-0 text-left">
            <h2 className="text-2xl font-semibold md:text-2xl lg:text-3xl">
              {productDetail.name}
            </h2>
            <div className="flex items-center mt-2">
              <Image
                src="https://ucarecdn.com/6d4896c2-5d21-4d7c-ae54-fa89f9f73410/-/format/auto/"
                alt="Rate Stars"
              />
              <p className="text-sm ml-4 font-light">
                {productDetail.rating.average}
              </p>
            </div>
            <div className="flex mt-4 items-center">
              <p className="text-app-primary font-semibold text-2xl mr-3">
                {`$${productDetail.price}`}
              </p>
              <p className="text-gray-500 line-through mr-3">{`$${productDetail.basePrice}`}</p>
              <p className="py-1 px-3 bg-red-50 rounded-4xl text-red-700">
                -40%
              </p>
              <p className="ml-3 font-medium">
                In stock: {productDetail.variants[selected]?.stock || 0}
              </p>
            </div>
            <p className="mt-4 md:text-lg lg:text-xl font-light">
              {productDetail.description}
            </p>
            <div className="mt-10 flex justify-between">
              <div className="flex">
                {productDetail.variants.map(
                  (item: ProductVariant, index: number) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelected(index);
                        setSelectedVariantId(item.id);
                      }}
                      className="h-12 w-12 mr-3 rounded-2xl flex items-center justify-center cursor-pointer"
                      style={{ backgroundColor: item.hex }}
                    >
                      {selected === index ? (
                        <Check className="text-white font-bold" />
                      ) : null}
                    </div>
                  ),
                )}
              </div>
              <div className="h-12 w-12 mr-4">
                <Input
                  aria-label="Quantity"
                  type="number"
                  min={1}
                  max={productDetail.variants[selected]?.stock || 100}
                  value={quantity}
                  onChange={(e) => {
                    const inputValue = Number(e.target.value);
                    const maxStock =
                      productDetail.variants[selected]?.stock || 100;
                    setQuantity(
                      inputValue < 1
                        ? 1
                        : inputValue > maxStock
                          ? maxStock
                          : inputValue,
                    );
                  }}
                  className="bg-background-primary rounded-2xl h-full p-0 text-center lg:pl-3"
                />
              </div>
            </div>
            <div className="mt-10 w-full">
              <Button
                variant={'outline'}
                onClick={handleAddToCart}
                disabled={isLoading || !user}
                className="w-full py-3 bg-app-primary hover:bg-app-tertiary hover:text-white border-none rounded-3xl text-white font-light text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]"
              >
                {!user
                  ? 'Sign in to add item to cart'
                  : isLoading
                    ? 'Adding to cart...'
                    : 'Add to cart'}
              </Button>
            </div>
            <div>
              <div className="flex mt-12">
                <Box className="mr-2" />
                <p>Free shipping included</p>
              </div>
              <div className="flex mt-8">
                <Sprout className="mr-2" />
                <p>Made from the best of materials sourced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PeopleViewed categoryId={productDetail.mainCategoryId} />
    </div>
  );
};

export default ProductDetail;
