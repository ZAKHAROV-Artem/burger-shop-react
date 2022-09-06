import { useTypedSelector } from "./useTypedSelector";

export const useGetBurger = (id: number) => {
  const { burgers, loading, error } = useTypedSelector(
    (state) => state.burgers
  );
  const burger = burgers.filter((burger) => burger.id === id);
  return burger[0] || null;
};
