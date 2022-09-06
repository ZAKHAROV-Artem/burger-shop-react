import MenuItem from "../UI/MenuItem";
import { FaHamburger } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IMenuItem } from "../types/sidebarTypes";

const Sidebar: React.FC = () => {
  const itemsList: IMenuItem[] = [
    { icon: <FaHamburger />, title: "Burgers", url: "/" },
    { icon: <FaShoppingCart />, title: "Cart", url: "cart" },
    { icon: <FaPhoneAlt />, title: "Contacts", url: "contacts" },
  ];

  return (
    <aside className="flex flex-col">
      {itemsList.map((item: IMenuItem) => (
        <MenuItem
          key={item.url}
          icon={item.icon}
          title={item.title}
          url={item.url}
        />
      ))}
    </aside>
  );
};
export default Sidebar;
