import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import { useEffect } from "react";
import Loader from "./UI/Loader";

const App: React.FC = () => {
  return (
    <div className="App w-screen h-screen bg-gray-100">
      <Header />
      <Sidebar />
      <Main />
    </div>
  );
};
export default App;
