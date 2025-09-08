import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul className="flex items-center">
      <li className="">
        <NavLink to="/" className="w-full h-full p-4 hover:bg-gray-300">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/products" className="w-full h-full p-4 hover:bg-gray-300">
          Shop
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/products" className="w-full h-full p-4 hover:bg-gray-300">
          Categories
        </NavLink>
      </li>
      <li className="">
        <NavLink to="/products" className="w-full h-full p-4 hover:bg-gray-300">
          Blog
        </NavLink>
      </li>
    </ul>
  );
};

export default Navbar;
