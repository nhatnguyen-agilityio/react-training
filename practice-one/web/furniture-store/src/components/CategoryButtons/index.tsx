import { memo } from 'react';
import Button from '../common/Button';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

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
                      ? 'bg-app-primary text-white hover:bg-app-primary hover:text-white'
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
