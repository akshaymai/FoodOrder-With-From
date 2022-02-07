import React from 'react'
import classss from './card.module.css'
const Card=(props)=>{
    return (
        <div className={classss.card}>
            {props.children}
        </div>
    )
}
export default Card