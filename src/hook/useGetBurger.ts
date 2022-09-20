import { useTypedSelector } from "./useTypedSelector";

export const useGetBurger = (id: number) => {
  const { burgers } = useTypedSelector((state) => state.burgers);
  const burger = burgers.filter((burger) => burger.id === id);
  return burger[0] || null;
};
