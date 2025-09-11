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
import { useState } from 'react';

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
  const [searchProductsInput, setSearchProductsInput] = useState('');
  const [searchProducts, setSearchProducts] = useState('');
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
            value={searchProductsInput}
            onChange={(e) => setSearchProductsInput(e.target.value)}
            placeholder="Search by name or category..."
            className="rounded-3xl h-14 shadow-none placeholder:font-light pl-5 pr-14 text-base focus:border-none"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                setSearchProducts(searchProductsInput);
              }
            }}
          />
          <div
            onClick={() => setSearchProducts(searchProductsInput)}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-r-3xl border-l-1 border-l-background-primary h-full w-16 flex items-center justify-center hover:bg-background-primary"
          >
            <Search className="text-gray-400 h-5 w-full" />
          </div>
        </div>
        <CategoryButtons buttonList={buttonList} />
      </div>
      <TopProducts categoryId={categoryId} searchProducts={searchProducts} />
      <PeopleViewed />
    </>
  );
};

export default Products;
