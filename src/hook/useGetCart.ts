import { useTypedSelector } from "./useTypedSelector";

export const useGetCart = (id: number) => {
  const { cartItems } = useTypedSelector((state) => state.cart);
  const cart = cartItems.filter((cart) => cart.id === id);
  return cart[0] || null;
};
