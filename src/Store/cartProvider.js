import React, { useReducer } from "react";
import Cartcontext from "./cartContext";

const defaultState = {
  Items: [],
  TotalAmount: 0,
};

const cartReducer = (state, action) => {
  console.log(action)
  if (action.type === "ADD_ITEM") {
    const totalAmount =
      state.TotalAmount + action.item.price * action.item.amount;

    const exitingItemIndex = state.Items.findIndex(
      (item) => item.id === action.item.id
    );

    const exitingCartItem = state.Items[exitingItemIndex];

    let updateItems;

    if (exitingCartItem) {
      const updateItem = {
        ...exitingCartItem,
        amount: exitingCartItem.amount + action.item.amount,
      };
      updateItems = [...state.Items];
      updateItems[exitingItemIndex] = updateItem;
    } else {
      updateItems = state.Items.concat(action.item);
    }
    return {
      Items: updateItems,
      TotalAmount: totalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
 

    const exitingItemIndex = state.Items.findIndex(
      (item) => item.id === action.id
    );

    const exitingCartItem = state.Items[exitingItemIndex];
    const totalAmount =state.TotalAmount - exitingCartItem.price;
    let updateItems;

    if(exitingCartItem.amount === 1){
      updateItems=state.Items.filter((item)=>item.id !== action.id)
    }else{
      updateItems=[...state.Items]
      const updateItem={...exitingCartItem,amount:exitingCartItem.amount-1}
      updateItems[exitingItemIndex]=updateItem
    }
    return{
      Items: updateItems,
      TotalAmount: totalAmount,
    }
  }
  if(action.type === 'CLEAR_CART'){
    return defaultState
  }

  return defaultState
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    cartDispatch({ type: "ADD_ITEM", item: item });
  };
  const removeItemHandler = (id) => {
    cartDispatch({ type: "REMOVE_ITEM", id: id });
  };
  const cleartCartHandler=()=>{
    cartDispatch({type:"CLEAR_CART"})
  }

  const cartContext = {
    Items: cartState.Items,
    TotalAmount: cartState.TotalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearcart:cleartCartHandler
  };

  return (
    <Cartcontext.Provider value={cartContext}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
