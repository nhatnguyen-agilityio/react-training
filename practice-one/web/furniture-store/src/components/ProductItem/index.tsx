import Image from '../common/Image';

const ProductItem = ({ name, price, imageUrl, imageAlt }) => {
  return (
    <div className="mt-6">
      <div className="bg-background-primary min-h-48 md:min-h-78 flex justify-center items-center">
        <Image
          src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
          alt="product"
          className="w-3/5 h-3/5 object-contain"
        />
      </div>
      <div className="flex justify-between items-center my-2 font-bold">
        <p className="line-clamp-1 text-left">Modern Nightstand</p>
        <p className="px-4 py-1 bg-background-primary rounded-2xl">$225</p>
      </div>
      <div className="flex">
        <div className="w-7 h-7 mr-4 rounded-full bg-amber-400"></div>
        <div className="w-7 h-7 rounded-full bg-amber-400"></div>
      </div>
    </div>
  );
};

export default ProductItem;
