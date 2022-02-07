import React, { Fragment, useContext } from "react";
import Cartcontext from "../../Store/cartContext";
import stylesss from "./MealItem.module.css";
import MealsForm from "./MealsForm";

const MealsItems = ({ name, description, price, id }) => {
  const cartctx = useContext(Cartcontext);

  const addtoCardHandler = (quantity) => {
    cartctx.addItem({
      id,
      description,
      price,
      name,
      amount: quantity,
    });
  };

  return (
    <Fragment>
      <li className={stylesss.meal}>
        <div>
          <div>{name}</div>
          <div className={stylesss.description}>{description}</div>
          <div className={stylesss.price}>{price}</div>
        </div>
        <div>
          <MealsForm passQantityToParent={addtoCardHandler} />
        </div>
      </li>
    </Fragment>
  );
};
export default MealsItems;
