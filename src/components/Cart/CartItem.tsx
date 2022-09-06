import React from "react";
import { IBurgerItem } from "../../types/burgersTypes";
import { TiDeleteOutline } from "react-icons/ti";
import "../../styles/cartItem.css";
import { useActions } from "../../hook/useActions";
interface CartItemProps {
  id: number;
  name: string;
  description: string;
  qty: number;
}

export const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  description,
  qty,
}) => {
  const { removeCartItem, adjustCartItemCount } = useActions();
  return (
    <div
      className="w-full rounded-md mt-3 flex bg-white"
      style={{ boxShadow: "0 0 5px rgba(0,0,0,0.3)" }}
    >
      <div className="flex items-center relative" id="hover_el">
        <TiDeleteOutline
          size={36}
          className="absolute"
          onClick={() => removeCartItem(id)}
        />

        <img
          className="z-10 rounded-md"
          src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/pikantny-burger6162521633527021000.jpg "
          alt=""
        />
      </div>

      <div className="z-20 bg-white p-3 grow">
        <h2 className="text-xl sm:text-3xl font-bold">{name}</h2>
        <h3 className="text-md sm:text-lg max-w-xs mt-3">{description}</h3>
      </div>
      <div className="flex items-center pr-7 ">
        <button
          className="px-2 rounded-sm bg-yellow-400 text-2xl border-none h-fit"
          onClick={() => adjustCartItemCount(id, qty + 1)}
        >
          +
        </button>
        <div className="px-3">{qty}</div>
        <button
          className="px-2 rounded-sm bg-yellow-400 text-2xl border-none h-fit"
          onClick={() => {
            if (qty) {
              return adjustCartItemCount(id, qty - 1);
            }
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};
