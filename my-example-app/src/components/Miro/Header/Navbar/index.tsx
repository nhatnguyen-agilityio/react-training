import arrowIcon from "../../assets/arrow.png"

const Navbar = () => {
  const navBarItems = [
    {id: 1, name: "Product", hasArrow: true},
    {id: 2, name: "Solutions", hasArrow: true},
    {id: 3, name: "Resources", hasArrow: true},
    {id: 4, name: "Enterprise", hasArrow: false},
    {id: 5, name: "Pricing", hasArrow: false},
  ];

  return (
    <div className="h-full flex items-center mr-[30px] mr-auto">
      <ul className="flex h-full justify-center">
        {navBarItems.map((item) => (
          <li key={item.id} className="flex items-center justify-center text-center mx-auto">
            <span className={`ml-[15px] ${!item.hasArrow ? "mr-[15px]" : "mr-[10px]"}`}>{item.name}</span>
            {item.hasArrow && <img src={arrowIcon} alt="Arrow" className="h-[10px] w-[10px] pt-[3px] mr-[15px]" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
