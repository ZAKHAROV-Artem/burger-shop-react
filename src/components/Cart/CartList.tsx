
import { useTypedSelector } from "../../hook/useTypedSelector";
import { Empty } from "antd";
import { CartItem } from "./CartItem";

const Cart: React.FC = () => {
  const { cartItems } = useTypedSelector((state) => state.cart);

  return (
    <div className="h-screen overflow-y-scroll p-2">
      <h1 className="flex items-center text-2xl mb-5">
        Cart
        <div className="ml-3 text-sm px-3 py-2 rounded-md bg-yellow-400">
          {cartItems.length}
        </div>
      </h1>
      <div className="" style={{ maxHeight: "95vh" }}>
        {cartItems ? (
          <div>
            {cartItems.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.burger.name}
                  description={item.burger.description}
                  qty={item.burger.qty}
                />
              );
            })}
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};
export default Cart;
