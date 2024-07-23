import { NavItemType } from "../../data/nav";
import { useState } from "react";

interface NavProps {
  navItems: NavItemType[];
}
const Nav = ({ navItems }: NavProps) => {
  const [activeItem, setActiveItem] = useState(0);
  return (
    <ul className="mt-4 flex flex-col">
      {navItems.map((item) => (
        <li
          onClick={() => setActiveItem(item.id)}
          key={item.id}
          className={`px-4 py-3 font-medium text-dark w-full flex items-center gap-x-2 hover:bg-lightGreen hover:text-green group transition-all cursor-pointer rounded-[8px] ${
            activeItem === item.id ? "bg-lightGreen text-green" : ""
          }`}
        >
          {item.name}
          <span
            className={`text-gray font-regular group-hover:bg-lightGreen group-hover:text-green transition-all ${
              activeItem === item.id ? "bg-lightGreen text-green" : ""
            }`}
          >
            ({item.items})
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
