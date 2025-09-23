import { memo } from 'react';
import Button from '../common/Button';
import { lazy } from 'react';

const Carousel = lazy(() =>
  import('../ui/carousel').then((module) => ({ default: module.Carousel })),
);
const CarouselContent = lazy(() =>
  import('../ui/carousel').then((module) => ({
    default: module.CarouselContent,
  })),
);
const CarouselItem = lazy(() =>
  import('../ui/carousel').then((module) => ({ default: module.CarouselItem })),
);

const CategoryButtons = ({
  buttonList,
  selectedCategory,
  onCategorySelect,
}: {
  buttonList: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}) => {
  return (
    <div className="mt-4">
      <Carousel className="w-full">
        <CarouselContent className="-ml-1">
          {buttonList.map((item, index) => (
            <CarouselItem key={index} className="pl-1 basis-auto">
              <div className="p-1">
                <Button
                  onClick={() => {
                    onCategorySelect(item);
                  }}
                  variant={'outline'}
                  className={`rounded-2xl py-2 px-4 text-sm text-black font-medium hover:bg-gray-300 border-none transition-colors ${
                    selectedCategory === item
                      ? 'bg-app-primary text-white hover:bg-app-primary hover:text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.6)]'
                      : 'bg-background-primary hover:text-black'
                  }`}
                >
                  {item}
                </Button>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default memo(CategoryButtons);
