import type { EmblaCarouselType } from 'embla-carousel';
import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Progress } from '../ui/progress';
import type { ProductInterface } from '../../interfaces/products';

const listProducts: ProductInterface[] = [
  {
    id: 1,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 1,
        hex: '#E5E1D8',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 2,
        hex: '#D1C4E9',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 3,
        hex: '#FFCC80',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 4,
        hex: '#E5E1D8',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 5,
        hex: '#D1C4E9',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 6,
        hex: '#FFCC80',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 7,
        hex: '#E5E1D8',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 8,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 8,
        hex: '#D1C4E9',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 9,
        hex: '#FFCC80',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
  {
    id: 10,
    name: 'Modern Nightstand',
    price: 225,
    variants: [
      {
        id: 10,
        hex: '#E5E1D8',
        size: 'Medium',
        stock: 10,
        images: [
          {
            url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
            alt: 'Modern Nightstand',
          },
        ],
      },
    ],
  },
];

const PeopleViewed = () => {
  const [api, setApi] = useState<EmblaCarouselType | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const update = () => {
      setCurrent(api.selectedScrollSnap() + 1);
      setCount(api.scrollSnapList().length);
    };

    update();
    api.on('select', update);

    return () => {
      api.off('select', update);
    };
  }, [api]);

  return (
    <div className="container my-12">
      <Carousel setApi={(api) => setApi(api ?? null)} className="w-full">
        <div className="flex justify-between">
          <p className="text-xl md:text-2xl font-bold md:font-semibold">
            People Also Viewed
          </p>
          <div className="hidden mr-4 md:flex">
            <CarouselPrevious className="static translate-y-0 w-8 h-8 bg-background-primary border-none hover:bg-gray-300" />
            <CarouselNext className="static translate-y-0 w-8 h-8 ml-3 bg-background-primary border-none hover:bg-gray-300" />
          </div>
        </div>
        <div>
          <CarouselContent>
            {listProducts.map((item: ProductInterface, index: number) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                <ProductItem
                  key={item.id}
                  id={item.id}
                  variantId={item.variants[0]?.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.variants[0]?.images[0].url}
                  imageAlt={item.variants[0]?.images[0].alt}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>
      </Carousel>
      <Progress
        value={count > 0 ? (current / count) * 100 : 0}
        className="my-8 h-2 md:hidden"
      />
    </div>
  );
};

export default PeopleViewed;
