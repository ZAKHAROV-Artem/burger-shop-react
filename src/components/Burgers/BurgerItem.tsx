import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useActions } from "../../hook/useActions";
import { useGetCart } from "../../hook/useGetCart";

import { IBurgerItem } from "../../types/burgersTypes";

interface BurgerItemProps {
  burger: IBurgerItem;
}
export const BurgerItem: React.FC<BurgerItemProps> = ({ burger }) => {
  const { addCartItem, removeCartItem, adjustCartItemCount } = useActions();
  const cart = useGetCart(burger.id);
  return (
    <div
      className="rounded-md grid grid-col-1 grid-row-3 py-4"
      style={{ boxShadow: "0 0 5px rgba(0,0,0,0.3)" }}
    >
      <img
        className="w-full px-3 justify-self-center mb-2"
        src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/pikantny-burger6162521633527021000.jpg "
        alt=""
      />
      <div className="px-3 grid grid-row-3 gap-3 grid-col-1">
        <div className="font-bold">
          {burger.id + 1}.{burger.name}
        </div>
        <div>
          {burger.description.length > 30
            ? burger.description.slice(0, 20) + "..."
            : burger.description}
        </div>
        <div className="aling-self-end grid justify-items-center grid-cols-1 gap-2 lg:grid-cols-2 ">
          <Link
            to={`burger/${burger.id}`}
            className="w-fit h-fit p-2 bg-yellow-400 rounded-md hover:text-white"
          >
            See more
          </Link>
          {cart?.burger.isInCart ? (
            <button
              style={{ transition: "0.4s" }}
              className="w-fit h-fit p-2 bg-yellow-400 rounded-md hover:text-white"
              onClick={() => removeCartItem(burger.id)}
            >
              <span>Remove from cart</span>
            </button>
          ) : (
            <button
              style={{ transition: "0.4s" }}
              className="w-fit h-fit p-2 bg-yellow-400 rounded-md hover:text-white"
              onClick={() => addCartItem(burger)}
            >
              <span>Add to cart</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
