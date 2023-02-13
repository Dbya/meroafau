


const Cartreducer = (state,action) => {
 if(action.type=== "ADDINGCART"){
   let {id , amount , myproducts}=action.payload;
   console.log("my products are adding " , myproducts)

   let cartproduct;

   cartproduct={
    id:myproducts.id,
    title:myproducts.title,
   thumbnail:myproducts.thumbnail,
    amount,
    price:myproducts.price,
    max:myproducts.stock,

   }
   return {
    ...state,
    cart:[...state.cart, cartproduct],
   }
 }
 
 if(action.type=== "DELETEME"){
  let updatedcart=state.cart.filter((curElem)=> curElem.id !== action.payload);
  return{
    ...state,
    cart:updatedcart,
  }
 }

 return state;
}

export default Cartreducer
