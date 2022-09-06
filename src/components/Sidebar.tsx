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
    <aside className="md:flex md:flex-col">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/burger-king-png-logo/burger-king-png-logo-0.png"
          alt=""
          className="w-23"
        />
      </div>
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
