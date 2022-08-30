import "../styles/header.css";
import Input from "../UI/input";

const Header: React.FC = () => {
  return (
    <header className="flex mx-20 justify-between items-center">
      <div className="logo">
        <img
          src="https://www.freepnglogos.com/uploads/burger-king-png-logo/burger-king-png-logo-0.png"
          alt=""
        />
      </div>
      <div className="flex items-center px-3 rounded-md bg-gray-200">
        <i className="fa fa-search icon text-gray-500"></i>
        <Input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none py-2 px-3"
        />
      </div>
    </header>
  );
};
export default Header;
