import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import CategoryButtons from '../components/CategoryButtons';
import TopProducts from '../components/TopProducts';
import PeopleViewed from '../components/PeopleViewed';
import { useSearchParams } from 'react-router-dom';

const buttonList = [
  'All',
  'Sofa',
  'Accent chair',
  'Lounge chair',
  'Coffee table',
  'Center table',
  'Flower pot',
  'Lamp',
];

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryTitle = searchParams.get('categoryTitle');
  const categoryId = searchParams.get('categoryId');

  return (
    <>
      <div className="container flex flex-col mt-15">
        <h2 className="text-2xl font-semibold mb-6 md:text-5xl md:font-bold">
          {categoryTitle ? categoryTitle : 'All Products'}
        </h2>
        <p className="text-sm font-light mb-6 md:px-1 md:text-lg">
          Transform your sitting room with our elegant and functional seating
          options, perfect for every modern home.
        </p>
        <div className="text-sm font-light mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              {categoryTitle && (
                <>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{categoryTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="mt-6 mb-4 w-full relative flex justify-between mx-auto lg:w-160">
          <Input
            type="text"
            placeholder="Search by name or category..."
            className="rounded-3xl h-14 shadow-none placeholder:font-light pl-5 pr-14 text-base"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 h-full w-12 flex items-center justify-center">
            <Search className="text-gray-400 h-5 w-full" />
          </div>
        </div>
        <CategoryButtons buttonList={buttonList} />
      </div>
      <TopProducts categoryId={categoryId} />
      <PeopleViewed />
    </>
  );
};

export default Products;
