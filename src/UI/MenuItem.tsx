import { Link } from "react-router-dom";
import { IMenuItem } from "../types/aside";

const MenuItem: React.FC<IMenuItem> = ({ icon, title }) => {
  return (
    <div className="flex my-1 items-center p-3 rounded-md bg-yellow-400">
      {icon}
      <Link to={title.toLowerCase()} className="ml-3 text-xl">
        {title}
      </Link>
    </div>
  );
};
export default MenuItem;
