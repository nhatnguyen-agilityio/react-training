import CategoryButtons from '../components/CategoryButtons';
import TopProducts from '../components/TopProducts';
import PeopleViewed from '../components/PeopleViewed';
import SearchProduct from '../components/SearchProduct';
import BreadcrumbComponent from '../components/common/Breadcrumb';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GetMainCategories } from '../apis/main-categories';
import { GetSubCategories } from '../apis/sub-categories';
import type { CategoryInterface } from '../interfaces/category';
import { Skeleton } from '../components/ui/skeleton';

const Products = () => {
  const [searchProductsInput, setSearchProductsInput] = useState('');
  const [searchProducts, setSearchProducts] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [mainCategoryId, setMainCategoryId] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const categoryTitle = searchParams.get('categoryTitle');
  const categoryId = searchParams.get('categoryId');

  useEffect(() => {
    if (categoryId) {
      setMainCategoryId(categoryId);
    }
  }, [categoryId]);

  const mainCategoriesQuery = GetMainCategories(!categoryId);
  const subCategoriesQuery = GetSubCategories(categoryId, !!categoryId);

  const {
    data: categoriesData,
    isPending,
    isError,
    error,
  } = categoryId ? subCategoriesQuery : mainCategoriesQuery;

  const categories = [
    'All',
    ...(categoriesData?.map((category: CategoryInterface) => category.name) ||
      []),
  ];

  const categoryNameToId =
    categoriesData?.reduce(
      (acc: Record<string, number>, category: CategoryInterface) => {
        acc[category.name] = category.id;
        return acc;
      },
      {},
    ) || {};

  const handleSelectCategory = (category: string) => {
    if (categoryId) {
      setSelectedCategory(category === 'All' ? 'All' : category);
    } else {
      setSelectedCategory(category);
      setMainCategoryId(
        category === 'All' ? null : String(categoryNameToId[category]),
      );
    }
  };

  if (isPending) {
    return (
      <div className="mt-6 md:mt-12 container">
        <div className="flex flex-col md:items-center">
          <Skeleton className="h-8 w-48 mb-4" />
          <Skeleton className="h-8 w-100" />
        </div>
        <div className="mt-6 mb-4 w-full relative flex justify-between mx-auto lg:w-160">
          <Skeleton className="h-14 w-full rounded-3xl" />
        </div>
        <div className="mt-4">
          <div className="flex gap-2">
            {Array.from({ length: 8 }).map((_, idx) => (
              <Skeleton key={idx} className="h-12 w-24 rounded-2xl" />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <div key={idx} className="mt-6">
              <div className="bg-background-primary min-h-48 md:min-h-78 flex items-center relative">
                <Skeleton className="w-3/5 h-40 md:h-56 mx-auto" />
              </div>
              <div className="flex justify-between items-center my-2">
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-7 w-16 rounded-2xl" />
              </div>
              <div className="flex">
                <Skeleton className="w-7 h-7 mr-4 rounded-full" />
                <Skeleton className="w-7 h-7 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 md:w-1/2 mx-auto">
          <div>
            <Skeleton className="h-4 w-48" />
          </div>
          <Skeleton className="mt-6 h-1 w-full" />
          <div className="mt-6 flex justify-center">
            <Skeleton className="h-10 w-40" />
          </div>
        </div>
        <div className="mt-6">
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 md:mt-12 container">
        <p className="text-left text-xl font-bold mb-2 md:mb-5 md:text-4xl">
          Categories Buttons
        </p>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  const getSubCategoryName = () => {
    if (!categoryId || selectedCategory === 'All') {
      return 'All';
    }
    return String(categoryNameToId[selectedCategory]);
  };

  return (
    <>
      <div className="container flex flex-col mt-15">
        <h2 className="text-2xl font-semibold mb-6 md:text-5xl md:font-bold">
          {`${selectedCategory} Products`}
        </h2>
        <p className="text-sm font-light mb-6 md:px-1 md:text-lg">
          Transform your sitting room with our elegant and functional seating
          options, perfect for every modern home.
        </p>
        <div className="text-sm font-light mx-auto">
          <BreadcrumbComponent
            items={[
              { label: 'Home', href: '/' },
              ...(categoryTitle
                ? [{ label: categoryTitle, isCurrentPage: true }]
                : []),
            ]}
          />
        </div>
        <SearchProduct
          searchProductsInput={searchProductsInput}
          setSearchProductsInput={setSearchProductsInput}
          setSearchProducts={setSearchProducts}
        />
        <CategoryButtons
          buttonList={categories || []}
          selectedCategory={selectedCategory}
          onCategorySelect={handleSelectCategory}
        />
      </div>
      <TopProducts
        categoryId={mainCategoryId}
        searchProducts={searchProducts}
        subCategoryName={getSubCategoryName()}
      />
      <PeopleViewed
        categoryId={mainCategoryId ? Number(mainCategoryId) : undefined}
      />
    </>
  );
};

export default Products;
