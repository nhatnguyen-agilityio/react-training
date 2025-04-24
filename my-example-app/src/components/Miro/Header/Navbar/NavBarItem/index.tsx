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
      <li key={item.id} className="flex items-center justify-center text-center mx-auto">
        <span className={`ml-[15px] ${!item.hasArrow ? "mr-[15px]" : "mr-[10px]"}`}>{item.name}</span>
        {item.hasArrow && <Image src={arrowIcon} alt="Arrow" className="h-[10px] w-[10px] pt-[3px] mr-[15px]" />}
      </li>
    </>
  );
}
export default NavBarItem;
