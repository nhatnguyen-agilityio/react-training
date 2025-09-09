import { useMainCategories } from '../../hooks.ts/useMainCategories';
import CategoryItem from './CategoryItem';

interface CategoryInterface {
  id: number;
  name: string;
  image: {
    url: string;
    alt: string;
  };
}

const Categories = () => {
  const { data: categories, isPending, isError, error } = useMainCategories();

  if (isPending) {
    return (
      <div className="mt-6 md:mt-12 container">
        <p className="text-left text-xl font-bold mb-2 md:mb-5 md:text-4xl">
          Categories
        </p>
        <p>Loading categories...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="mt-6 md:mt-12 container">
        <p className="text-left text-xl font-bold mb-2 md:mb-5 md:text-4xl">
          Categories
        </p>
        <p className="text-red-500">Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div className="mt-6 md:mt-12 container">
      <p className="text-left text-xl font-bold mb-2 md:mb-5 md:text-4xl">
        Categories
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {categories.map((category: CategoryInterface, index: number) => (
          <CategoryItem
            key={category.id}
            id={category.id}
            name={category.name}
            imageUrl={category.image.url}
            imageAlt={category.image.alt}
            className={
              index === 0 || index === categories.length - 1
                ? 'md:col-span-2 md:flex-row md:justify-between md:pl-10'
                : 'md:justify-center lg:justify-around lg:items-end lg:pb-8'
            }
            imageClassName={
              index === 0 || index === categories.length - 1
                ? 'md:w-auto md:h-full'
                : 'md:w-38 lg:w-52'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
