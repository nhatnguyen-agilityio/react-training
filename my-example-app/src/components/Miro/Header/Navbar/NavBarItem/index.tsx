import arrowIcon from "../../../assets/arrow.png"
import Image from "../../../Common/image";

type itemProps = {
  id: number,
  name: string,
  hasArrow: boolean
}

const NavBarItem = ({ item }: { item: itemProps }) => {
  return (
    <>
      <li key={item.id} className="group flex items-center justify-center text-center mx-auto hover:bg-gray-300 active:bg-gray-400">
        <span className={`ml-4 group-hover:underline ${!item.hasArrow ? "mr-4" : "mr-2.5"}`}>{item.name}</span>
        {item.hasArrow && <Image src={arrowIcon} alt="Arrow" className="h-2.5 w-2.5 pt-1 mr-4" />}
      </li>
    </>
  );
}
export default NavBarItem;
