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

const listProducts = [
  {
    id: 1,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 2,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 3,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 4,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 5,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 6,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 7,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 8,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 9,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 10,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
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
            {listProducts.map((item, index) => (
              <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                <ProductItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  imageUrl={item.image.url}
                  imageAlt={item.image.alt}
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
