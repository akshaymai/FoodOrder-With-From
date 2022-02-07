import React from 'react'


const Cartcontext= React.createContext({
    Items:[],
    TotalAmount:0,
    addItem:(item)=>{},
    removeItem:(id)=>{},
    clearcart:()=>{}
})

export default Cartcontext;