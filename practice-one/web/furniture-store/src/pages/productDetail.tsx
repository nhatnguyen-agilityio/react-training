import { useState } from 'react';
import { Check, Box, Sprout } from 'lucide-react';
import Image from '../components/common/Image';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '../components/ui/carousel';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import PeopleViewed from '../components/PeopleViewed';

const colors = ['#E5E1D8', '#D1C4E9', '#FFCC80'];

const ProductDetail = () => {
  const [selected, setSelected] = useState<number>(0);

  return (
    <div className="container mt-12">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Homepage</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Categories</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Sitting Room</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Luxe Armchair - Left Arm Chute</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Images slide for mobile */}
      <div className="grid-cols-1 md:grid-cols-2 md:gap-3 lg:gap-7 mt-4 md:mt-8 grid">
        <div className="flex justify-center mt-4 bg-background-primary py-4 md:hidden">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <Image
                    src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
                    alt="Modern Nightstand"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Images display for tablet and desktop */}
        <div className="hidden md:grid grid-cols-1 gap-4 w-full">
          <div className="w-full h-auto md:min-h-90 lg:min-h-150 flex justify-center items-center bg-background-primary">
            <Image
              src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
              alt="Modern Nightstand"
              className="object-contain"
            />
          </div>
          <div className="w-full h-auto md:min-h-90 lg:min-h-150 flex justify-center items-center bg-background-primary">
            <Image
              src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
              alt="Modern Nightstand"
            />
          </div>
          <div className="w-full h-auto md:min-h-90 lg:min-h-150 flex justify-center items-center bg-background-primary">
            <Image
              src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
              alt="Modern Nightstand"
            />
          </div>
        </div>
        <div className="md:ml-4 mt-4 md:mt-0 text-left">
          <h2 className="text-2xl font-semibold md:text-2xl lg:text-3xl">
            Luxe Armchair - Left Arm Chute
          </h2>
          <div className="flex items-center mt-2">
            <Image
              src="https://ucarecdn.com/6d4896c2-5d21-4d7c-ae54-fa89f9f73410/StarRatings.png"
              alt="Rate Stars"
            />
            <p className="text-sm ml-4 font-light">4.8 stars</p>
          </div>
          <div className="flex mt-4 items-center">
            <p className="text-app-primary font-semibold text-2xl mr-3">
              $899.00
            </p>
            <p className="opacity-50 line-through mr-3">$1000.00</p>
            <p className="py-1 px-3 bg-red-1/20 rounded-4xl text-red-1">-40%</p>
          </div>
          <p className="mt-4 md:text-lg lg:text-xl font-light">
            Ultra-functional and elegantly minimalist, our Luxe Armchair
            Collection draws inspiration from Nordic-style décor. It features a
            neutral color palette and natural wood accents, highlighted by
            uniquely designed hexagonal legs.
          </p>
          <div className="mt-10 flex justify-between">
            <div className="flex">
              {colors.map((color, index) => (
                <div
                  key={index}
                  onClick={() => setSelected(index)}
                  className="h-12 w-12 mr-3 rounded-2xl flex items-center justify-center cursor-pointer"
                  style={{ backgroundColor: color }}
                >
                  {selected === index ? (
                    <Check className="text-white font-bold" />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="h-12 w-12">
              <Input
                type="number"
                min={1}
                max={100}
                defaultValue={1}
                className="bg-background-primary rounded-2xl h-full p-0 text-center lg:pl-2"
              />
            </div>
          </div>
          <div className="mt-10 w-full">
            <Button
              variant={'outline'}
              className="w-full py-6 bg-app-tertiary hover:bg-app-primary hover:text-white border-none rounded-3xl text-white font-light text-xl"
            >
              Buy now
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
      <PeopleViewed />
    </div>
  );
};

export default ProductDetail;
