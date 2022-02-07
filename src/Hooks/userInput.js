import { useReducer } from "react";


const initialState={
  value:"",
  isTouched:false
}

const handleReducerfunction=(state,action)=>{
 

  if(action.type === "HANDLE_INPUT"){
    return{
      value:action.value,
      isTouched:state.isTouched
    }
  } 
  if(action.type === 'BLR'){
    return{
      value:state.value,
      isTouched:true
    }
  }
  
  if(action.type === 'RESET'){
    return{
      value:"",
      isTouched:false
    }
  }

  return handleReducerfunction
}

const useInput = (validateValue) => {

  const [state,dispatch]=useReducer(handleReducerfunction,initialState) 
  const valueIsValid = validateValue(state.value);
  const hasError = !valueIsValid && state.isTouched;

  const valueChangeHandler = (e) => { 
    dispatch({type:"HANDLE_INPUT",value:e.target.value,isTouched:state.isTouched}) 
  };
  const inputBlerHandler = (e) => {
    dispatch({type:"BLR",isTouched:true}) 
  };

  const reset = () => {
    dispatch({type:"RESET"})
  };
  return {
    value: state.value,
    hasError,
    valueChangeHandler,
    inputBlerHandler,
    reset,
    isValid: valueIsValid,
  };
};
export default useInput;
