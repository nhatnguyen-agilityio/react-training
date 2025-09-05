import Image from '../../common/Image';
import { Input } from '../../ui/input';

const CartItem = () => {
  return (
    <div className="ml-3 mr-4 flex justify-between mb-10 pb-10 border-b-1 border-gray-300">
      <div className="flex">
        <div className="h-25 w-25 md:w-30 md:h-30 lg:w-36 lg:h-36 flex-shrink-0 flex justify-center items-center bg-background-primary">
          <Image
            src="https://ucarecdn.com/093e2ab7-3038-4752-9691-833462c4116b/Nightstand1012.png"
            alt="Chair"
            className="w-3/5 h-3/5 object-contain"
          />
        </div>
        <div className="ml-3 flex flex-1 flex-col justify-between">
          <h3 className="font-medium line-clamp-2">
            Luxe Armchair - Left Arm Chute
          </h3>
          <p className=" hidden w-full md:line-clamp-2">
            Armchair ArmchairArmchair ArmchairArmchair ArmchairArmchair
            ArmchairArmchair ArmchairArmchair Armchair{' '}
          </p>
          <div className="flex mb-2">
            <div className="h-5 w-5 bg-amber-300 rounded-full mr-3"></div>
            <div className="h-5 w-5 bg-green-400 rounded-full mr-3"></div>
            <div className="h-5 w-5 bg-blue-300 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between lg:items-end ml-3">
        <p className="text-app-primary font-semibold text-sm md:text:lg lg:text-xl">
          $899.00
        </p>
        <div className="h-12 w-12 mr-4 lg:mr-0 flex items-end">
          <Input
            type="number"
            min={1}
            max={100}
            defaultValue={1}
            className="bg-background-primary rounded-2xl p-0 text-center lg:pl-2"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
