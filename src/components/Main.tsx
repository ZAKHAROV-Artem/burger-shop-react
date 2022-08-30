import { useLocation } from "react-router-dom";
import Burgers from "./Burgers";
import Cart from "./Cart";
import Contacts from "./Contacts";

const Main: React.FC = () => {
  const location = useLocation().pathname.replace("/", "");
  switch (location) {
    case "burgers":
      return <Burgers />;
    case "cart":
      return <Cart />;
    case "contacts":
      return <Contacts />;
  }
  return <main>Main</main>;
};
export default Main;
