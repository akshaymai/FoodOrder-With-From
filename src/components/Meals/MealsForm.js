import React, { useRef,useState} from "react";
import sty from "./MealItemForm.module.css";
import Input from "../UI/Input/input";

const MealsForm = (props) => {
    const [formValid,setFormValid]=useState(true)
    const inputRef=useRef()
  
    const handleSubmit=(e)=>{
        e.preventDefault();
        const enterQuantity=inputRef.current.value
        const enterQuantyNumber=+enterQuantity
        if(enterQuantity.trim().length === 0 || enterQuantity.trim().length <1 || enterQuantity.trim().length>5){
            setFormValid(false)
            return
        }
      props.passQantityToParent(enterQuantyNumber)
    }

  return (
    <form className={sty.form} onSubmit={handleSubmit}>
      <Input
        lebel="amount"
        ref={inputRef}
        input={{
          id: "amount",
          type: "number",
          // min: "1",
          // max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {!formValid && <p>Enter valid Quantity</p>}
      <button>Add+</button>
    </form>
  );
};
export default MealsForm;
