import React, { useContext, useState } from "react";
import Cartcontext from "../../Store/cartContext";
import Model from "../UI/Model/model";
import Checkout from "./checkout";
import sty from "./ShoppingCard.module.css";
import ShoppingCartItem from "./ShoppingCartItem";
const ShoppingCard = ({ onClose }) => {
  const [isShowcheckout,setIsshowCheckout]=useState(false)
  const [isSubmitting,setIssubmitting]=useState(false)
  const [didsubmit,setdidsubmit]=useState(false)
  const cartctx = useContext(Cartcontext);

  const addItemHandler = (item) => { 
    cartctx.addItem({...item,amount:1})
  };
  const removeItemHandler = (id) => { 
    cartctx.removeItem(id)
  };

  const cartItems = cartctx.Items.map((item, index) => {
    return (
      <ShoppingCartItem
        name={item.name}
        price={item.price}
        amount={item.amount}
        onAdd={addItemHandler.bind(null,item)}
        onRemove={removeItemHandler.bind(null, item.id)}
      />
    );
  });

const handleShowCheckout=()=>{
  setIsshowCheckout(true)
}  


const handlesubmittt=(data)=>{
 setIssubmitting(true)
  fetch('https://food-orders-app-581e5-default-rtdb.firebaseio.com/orders.json',{
    method:'POST',
    body:JSON.stringify({
      userDetails:data,
      cartDetais:cartctx.Items,
      totalamount:cartctx.TotalAmount
    }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  }).then((res)=>{
    console.log('send successfully')
    setIssubmitting(false)
    setdidsubmit(true) 
    cartctx.clearcart()
  }).catch((err)=>{
    console.log(err)
  })
}
 
const checkItems=cartctx.Items.length>0;


const modelCartContent=(
    <React.Fragment>
          <ul className={sty["cart-items"]}>{cartItems}</ul>
      <div className={sty.total}>
        <span>Total amount</span>
        <span>{cartctx.TotalAmount.toFixed(2)}</span>
      </div>
      { isShowcheckout&& <Checkout onSubmitHAndle={handlesubmittt} onCancel={onClose}/>}
      {!isShowcheckout &&(
      <div className={sty.actions}>
      <button className={sty["button--alt "]} onClick={onClose}>
        {" "}
        close
      </button>
    {checkItems && <button className={sty.button} onClick={handleShowCheckout}>Order</button>}
  
    </div>
      )}
    </React.Fragment>
  )

const disSubmitmodelcontent=(
  <React.Fragment>
    <p>Succesfully submited....</p>
    <button className={sty.button} onClick={onClose}>Close</button>
  </React.Fragment>
)
const issubmitingmodelcontent=<p>Sendng order data....</p>
  return (
    <Model handleonClose={onClose}>
      {!isSubmitting && !didsubmit && modelCartContent}
    {isSubmitting&&issubmitingmodelcontent}
    {!isSubmitting&&didsubmit&&disSubmitmodelcontent}
    </Model>
  );
};
export default ShoppingCard;
