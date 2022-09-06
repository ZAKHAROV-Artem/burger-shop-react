import { IBurgerItem } from "../../types/burgersTypes";
import { BurgerAction, BurgerActionTypes } from "../../types/burgersTypes";
import axios from "axios";
import { Dispatch } from "redux";
import Item from "antd/lib/list/Item";

const options = {
  method: "GET",
  url: "https://burgers1.p.rapidapi.com/burgers",
  headers: {
    "X-RapidAPI-Key": "f6991df5d3msheeba75a1f51cef1p15edb8jsnbda54856a588",
    "X-RapidAPI-Host": "burgers1.p.rapidapi.com",
  },
};

export const fetchBurgers = () => {
  return async (dispatch: Dispatch<BurgerAction>) => {
    try {
      dispatch({ type: BurgerActionTypes.FETCH_BURGERS });
      const response = await axios.request(options);
      dispatch({
        type: BurgerActionTypes.FETCH_BURGERS_SUCCESS,
        payload: [
          ...response.data.map((item: IBurgerItem) => ({
            ...item,
            isInCart: false,
            qty: 0,
          })),
        ],
      });
    } catch (error) {
      dispatch({
        type: BurgerActionTypes.FETCH_BURGERS_ERROR,
        payload: `Error with burgers loading :(`,
      });
    }
  };
};
