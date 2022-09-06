import { useState } from "react";
import { useSearchedBurgers } from "../../hook/useSearchedBurgers";
import { useTypedSelector } from "../../hook/useTypedSelector";
import { IBurgerItem } from "../../types/burgersTypes";
import Input from "../../UI/input";
import Loader from "../../UI/Loader";
import { BurgerItem } from "./BurgerItem";

const Burgers: React.FC = () => {
  const { burgers, loading, error } = useTypedSelector(
    (state) => state.burgers
  );
  const [search, setSearch] = useState<string>("");
  const searchedBurgers = useSearchedBurgers(burgers, search);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };
  if (loading) {
    return (
      <div className="flex justify-center mt-5">
        <Loader size={48} />
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex justify-center mt-5">
        <h1 className="text-2xl">{error}</h1>
      </div>
    );
  }

  return (
    <div
      className="h-screen overflow-y-scroll p-2"
      style={{ maxHeight: "95vh" }}
    >
      <h1 className="text-2xl mb-5">Burgers</h1>
      <div className="mb-3 flex items-center px-3 rounded-md bg-gray-200">
        <i className="fa fa-search icon text-gray-500"></i>
        <Input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none py-2 px-3"
          value={search}
          onChange={onChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {searchedBurgers.map((burger: IBurgerItem) => {
          return <BurgerItem key={burger.id} burger={burger} />;
        })}
      </div>
    </div>
  );
};

export default Burgers;
