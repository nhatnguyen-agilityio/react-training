import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { memo } from 'react';

const SearchProduct = ({
  searchProductsInput,
  setSearchProductsInput,
  setSearchProducts,
}: {
  searchProductsInput: string;
  setSearchProductsInput: (value: string) => void;
  setSearchProducts: (value: string) => void;
}) => {
  return (
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
      <button
        type="button"
        onClick={() => setSearchProducts(searchProductsInput)}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-r-3xl border-l-1 border-l-background-primary h-full w-16 flex items-center justify-center hover:bg-background-primary"
      >
        <Search className="text-gray-400 h-5 w-full" />
      </button>
    </div>
  );
};

export default memo(SearchProduct);
