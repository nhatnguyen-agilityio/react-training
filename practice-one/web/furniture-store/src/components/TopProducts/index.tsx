import ShowMore from '../common/ShowMore';
import FilterDropdown from '../FilterDropdown';
import ProductItem from '../ProductItem';
import { Progress } from '../ui/progress';

const listProducts = [
  {
    id: 1,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 2,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 3,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 4,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 5,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 6,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 7,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 8,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 9,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
  {
    id: 10,
    name: 'Modern Nightstand',
    price: 225,
    image: {
      url: 'https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png',
      alt: 'Modern Nightstand',
    },
  },
];

const TopProducts = () => {
  return (
    <div className="mt-6 md:mt-12 container">
      <div className="flex flex-col md:flex-row md:justify-between">
        <p className="text-left text-xl md:text-4xl font-bold mb-4 my-auto">
          Top Products
        </p>
        <div className="flex justify-start">
          <FilterDropdown />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {listProducts.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.image.url}
            imageAlt={product.image.alt}
          />
        ))}
      </div>
      <div className="mt-8 md:w-1/2 mx-auto">
        <p>Showing {listProducts.length} of 100 results</p>
        <Progress value={45} className="mt-6 h-1" />
        <ShowMore />
      </div>
    </div>
  );
};

export default TopProducts;
