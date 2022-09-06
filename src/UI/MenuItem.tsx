import { Link } from "react-router-dom";
import { IMenuItem } from "../types/sidebarTypes";

const MenuItem: React.FC<IMenuItem> = ({ icon, title, url }) => {
  return (
    <div className="flex my-1 items-center p-3 rounded-md bg-yellow-400">
      {icon}
      <Link to={url} className="ml-3 text-xl">
        {title}
      </Link>
    </div>
  );
};
export default MenuItem;
