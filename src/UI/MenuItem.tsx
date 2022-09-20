import { Link } from "react-router-dom";
import { IMenuItem } from "../types/sidebarTypes";

const MenuItem: React.FC<IMenuItem> = ({ icon, title, url }) => {
  return (
    <div className="flex w-full my-1 items-center py-1 px-3 md:p-2 rounded-md bg-yellow-400">
      {icon}
      <Link to={url} className="ml-3 text-xl">
        {title}
      </Link>
    </div>
  );
};
export default MenuItem;
