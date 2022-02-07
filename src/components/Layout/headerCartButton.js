import React, { Fragment,useContext ,useState,useEffect} from 'react'
import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/cartIicon'
import Cartcontext from '../../Store/cartContext'
const HeaderCartButtion=({handleOnshow})=>{
    const [showHighLight,setShowHightLght]=useState(false)
    const cartctx=useContext(Cartcontext)

    const totalItems=cartctx.Items.reduce((cartNumber,items)=>{
        return cartNumber+items.amount
    },0)

    const {Items}=cartctx
    useEffect(()=>{
     
        if(Items.length === 0){
            return
        }
        setShowHightLght(true)
        const timmer=setTimeout(() => {
            setShowHightLght(false)
        }, 500);
        return ()=>{
            clearTimeout(timmer)
        }

    },[Items])
    const dynamicClass=`${classes.button} ${showHighLight ? classes.bump:''}`
    return(
        <Fragment>
            <button onClick={handleOnshow} className={dynamicClass}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{totalItems}</span>
            </button>
        </Fragment>
    )
}

export default HeaderCartButtion;