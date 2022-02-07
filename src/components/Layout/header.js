import classes from './Header.module.css'
import React from 'react'
import pic from '../../assets/meals.jpg'
import HeaderCartButtion from './headerCartButton'

const Header=({onshow})=>{
    return(
        <>
        <header className={classes.header}> 
         <h1>Meals App</h1>
         <HeaderCartButtion  handleOnshow={onshow}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={pic} alt="meals images"/>
        </div>
        </>
    )
}
export default Header
