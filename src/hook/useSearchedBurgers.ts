import { useMemo } from "react";
import { IBurgerItem } from "../types/burgersTypes";

export const useSearchedBurgers = (
  burgers: IBurgerItem[],
  query: string
): IBurgerItem[] => {
  const searched_burgers = useMemo(() => {
    return burgers.filter((burger) =>
      burger.name.toUpperCase().includes(query.toUpperCase())
    );
  }, [query, burgers]);

  return searched_burgers;
};
