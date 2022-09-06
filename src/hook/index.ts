import * as BurgerActionCreators from "../redux/actionCreators/burgersAction";
import * as CartActionCreators from "../redux/actionCreators/cartAction";

export default {
  ...BurgerActionCreators,
  ...CartActionCreators,
};
