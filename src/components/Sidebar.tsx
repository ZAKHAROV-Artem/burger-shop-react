import MenuItem from "../UI/MenuItem";
import { FaHamburger } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
const Sidebar: React.FC = () => {
  const itemsList = [
    { icon: <FaHamburger />, title: "Burgers" },
    { icon: <FaShoppingCart />, title: "Cart" },
    { icon: <FaPhoneAlt />, title: "Contacts" },
  ];

  return (
    <aside className="flex flex-col mx-3">
      {itemsList.map((item) => (
        <MenuItem icon={item.icon} title={item.title} />
      ))}
    </aside>
  );
};
export default Sidebar;
