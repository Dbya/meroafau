import { createContext,useContext,useEffect , useReducer} from "react";
import axios from 'axios';
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();
// const API ="https://fakestoreapi.com/products";
const API ="https://dummyjson.com/products";
// const API ="https://api.storerestapi.com/products";

const initialState={
  isLoading:false,
  isError:false,
  product:[],
  featureProduct:[],
  isSingleloading:false,
  singleproduct:{},
}

const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)

//sabai product get garna ko lagi

 const getProduct= async (url)=>{
  dispatch({type:"Is_Loading"})
    try{
      const res=  await axios.get(url);
      const product= await  res.data.products;
      console.log("paila ko ",  product);
      dispatch({type:"Give_All_Data", payload:product})
    } catch (error){
      dispatch({type:"Give_My_Error"})
    }
  
 }
 useEffect(()=>{
  getProduct(API);
},[])

// single product get garna ko lagi

const getsingleProduct = async (url)=>{
  dispatch({type:"Is_Single_Loading"})
  try {
    const res=  await axios.get(url);
     const singleproduct= await  res.data;
     console.log(singleproduct)
     dispatch({type:"Give_All_SINGLE_Data", payload:singleproduct})
  } catch (error) {
    dispatch({type:"Give_My_Single_Error"})
  }
  
}

  return <AppContext.Provider value={{ ...state , getsingleProduct }} >
   {children}
  </AppContext.Provider>
};

//custom hook ho la najhukki dbya paxi sab ma import garda dukha hunxa vanera ho yo gareko ramro ho 
const useGlobalContext=()=>{
    return  useContext(AppContext);
}

export { AppProvider,AppContext ,useGlobalContext };
