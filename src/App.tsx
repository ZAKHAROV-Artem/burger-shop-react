import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import BurgerDetail from "./components/Burgers/BurgerDetail";
import Burgers from "./components/Burgers/BurgersList";

import Cart from "./components/Cart/CartList";
import Contacts from "./components/Contacts/Contacts";
import Layout from "./components/Layout";
import NotFoundPage from "./components/NotFoundPage";
import { useActions } from "./hook/useActions";

const App: React.FC = () => {
  const { fetchBurgers } = useActions();

  useEffect(() => {
    fetchBurgers();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Burgers />} />
          <Route path="/burger/:id" element={<BurgerDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
