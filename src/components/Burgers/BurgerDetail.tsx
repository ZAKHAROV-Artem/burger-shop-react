import React from "react";
import { useParams } from "react-router-dom";
import { useGetBurger } from "../../hook/useGetBurger";

const BurgerDetail: React.FC = () => {
  const params = useParams();

  const burger = useGetBurger(Number(params.id));
  return (
    <div className="pl-3">
      <div className="justify-between sm:flex">
        <div className="mr-3">
          <h1 className="row-span-1 text-xl sm:text-3xl font-bold">
            {burger.name} detail
          </h1>
          <h3 className="text-md sm:text-lg max-w-xs my-3 md:mt-10">
            {burger.description}
          </h3>
        </div>
        <img
          className="w-full rounded-xl sm:w-7/12"
          src="https://s3.przepisy.pl/przepisy3ii/img/variants/800x0/pikantny-burger6162521633527021000.jpg "
          alt=""
        />
      </div>

      <div className="mt-5">
        <h2 className="text-xl sm:text-2xl font-bold">Ingredients</h2>
        <ul className="flex flex-wrap list-disc text-md sm:text-xl">
          {burger.ingredients.map((ingredient, index) => {
            return (
              <li key={index} className="mx-5">
                {ingredient}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BurgerDetail;
