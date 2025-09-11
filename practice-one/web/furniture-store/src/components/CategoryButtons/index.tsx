import { Button } from '../ui/button';
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
                  className={`rounded-2xl hover:bg-gray-300 py-5 border-none transition-colors ${
                    selectedCategory === item
                      ? 'bg-app-primary text-white hover:bg-app-primary hover:text-white'
                      : 'bg-background-primary'
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

export default CategoryButtons;
