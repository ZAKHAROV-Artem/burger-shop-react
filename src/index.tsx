import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Burgers from "./components/Burgers";
import Cart from "./components/Cart";
import Contacts from "./components/Contacts";
import Main from "./components/Main";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Main />}>
          <Route path="burgers" element={<Burgers />} />
          <Route path="cart" element={<Cart />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
