import Nav from "./nav";
import { NavItemType } from "../../data/nav";
import Searchbar from "./searchbar";
interface SidebarProps {
  navItems: NavItemType[];
}
function Sidebar({ navItems }: SidebarProps) {
  return (
    <div className="w-[300px] hidden lg:block">
      <Searchbar />
      <Nav navItems={navItems} />
    </div>
  );
}

export default Sidebar;
