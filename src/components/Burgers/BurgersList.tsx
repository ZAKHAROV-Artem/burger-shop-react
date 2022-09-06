import { useEffect } from "react";
import { useActions } from "../../hook/useActions";
import { useTypedSelector } from "../../hook/useTypedSelector";
import { IBurgerItem } from "../../types/burgersTypes";
import Loader from "../../UI/Loader";
import { BurgerItem } from "./BurgerItem";

const Burgers: React.FC = () => {
  const { burgers, loading, error } = useTypedSelector(
    (state) => state.burgers
  );

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
    <div className="overflow-y-scroll p-2" style={{ maxHeight: "90vh" }}>
      <h1 className="text-2xl mb-5">Burgers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {burgers.map((burger: IBurgerItem) => {
          return <BurgerItem key={burger.id} burger={burger} />;
        })}
      </div>
    </div>
  );
};
export default Burgers;
