import CategoryItem from './CategoryItem';

const CategoriesList = [
  {
    id: 1,
    name: 'Sitting Room',
    image: {
      url: 'https://ucarecdn.com/e46a35c3-adb1-49d2-a264-19aba2691c2a/sittingroom.png',
      alt: 'Sitting Room',
    },
  },
  {
    id: 2,
    name: 'Accessories',
    image: {
      url: 'https://ucarecdn.com/e0cf545f-60e1-4fb0-bf22-e22c6198b08d/Nightstand101.png',
      alt: 'Accessories',
    },
  },
  {
    id: 3,
    name: 'Kitchen',
    image: {
      url: 'https://ucarecdn.com/abd86426-3195-427b-99e4-35b7e6198dea/Nightstand1011.png',
      alt: 'Kitchen',
    },
  },
  {
    id: 4,
    name: 'Bedroom',
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Bedroom',
    },
  },
];

const Categories = () => {
  return (
    <div className="mt-6">
      <p className="text-left text-xl font-bold mb-2">Categories</p>
      <div className="grid gap-6 md:grid-cols-2">
        {CategoriesList.map((category, index) => (
          <CategoryItem
            name={category.name}
            imageUrl={category.image.url}
            imageAlt={category.image.alt}
            className={
              index === 0 || index === CategoriesList.length - 1
                ? 'md:col-span-2 md:flex-row md:justify-between md:pl-10'
                : 'md:justify-center lg:justify-around lg:items-end lg:pb-8'
            }
            imageClassName={
              index === 0 || index === CategoriesList.length - 1
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
