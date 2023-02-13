import { useContext } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from '../reducer/Cartreducer'

const CartContext = createContext();

const initialstate={
    cart:[],
    totalitem:"",
    totalamount:"",
    shippingfee:50,
}

const CartProvider =({children})=>{

    const [state,dispatch] = useReducer(reducer,initialstate);

 const  Addingtocart=(id , amount , myproducts)=>{
    dispatch({type:"ADDINGCART",payload:{id , amount , myproducts}});

 }

   return <CartContext.Provider  value={{...state, Addingtocart}}>
   {children}
   </CartContext.Provider>
}

const useGlobalcartContext=()=>{
    return useContext(CartContext);
}

export {CartProvider, useGlobalcartContext}