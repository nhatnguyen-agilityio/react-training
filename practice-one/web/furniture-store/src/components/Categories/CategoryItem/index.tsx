import { MoveRight } from 'lucide-react';
import Image from '../../common/Image';
import { Button } from '../../ui/button';
import { Link } from 'react-router-dom';

const CategoryItem = ({
  id,
  name,
  imageUrl,
  imageAlt,
  className = '',
  imageClassName = '',
}: {
  id: number;
  name: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  imageClassName?: string;
}) => {
  return (
    <div
      className={`bg-background-primary w-full h-43 md:h-75 mb-2 flex justify-between md:flex-col-reverse md:items-center lg:flex-row ${className}`}
    >
      <div className="ml-7 md:ml-0 flex items-center md:flex-col">
        <p className="md:mt-2 text-xl font-semibold lg:text-4xl">{name}</p>
        <Link to={`/products?categoryId=${id}&categoryTitle=${name}`}>
          <Button
            variant="ghost"
            className="hidden border-1 border-black rounded-4xl items-center hover:bg-gray-300 mt-4 w-32 p-5 md:flex"
          >
            Shop now
            <MoveRight className="inline-block w-4 h-4 font-semibold" />
          </Button>
        </Link>
      </div>
      <div className={`w-1/2 py-2 md:py-0 ${imageClassName}`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default CategoryItem;
