import { createContext , useContext,useReducer ,useEffect} from "react";
import { useGlobalContext } from "./Productcontext";
import reducer from "../reducer/Filterreducer";

const Filtercontext = createContext();

const initialState={
    filteredProduct:[],
    allProducts:[],
    gridview:false,
    sortingvalue:"lowest",
    searchfilter:{
        text:" ",
        category:"all"
    }
}

export const FiltercontextProvider=({children})=>{
    const { product }  = useGlobalContext();
    console.log("prod" , product);
    const [state, dispatch] = useReducer(reducer, initialState)
   //grid view ko lagi function 
   const setgrid=()=>{
    return dispatch({type:"Grid_View"})
   }
   const setlist=()=>{
    return dispatch({type:"List_View"})
   }

   const sorting =()=>{
    return dispatch({type:"Sort_Item"})
   }

   const upadatefilter=(e)=>{
    let  name=e.target.name;
     let value=e.target.value;

     return dispatch({type:"Search_My_Input",payload: {name,value}})

   }
   
    useEffect(()=>{
        dispatch({type:"Filtered_Product"})
    dispatch({type:"Sorted_Product"})
    },[product,state.sortingvalue,state.searchfilter]);

    useEffect(() => {
       dispatch({type:"Load_Filter_Data",payload:product})
    }, [product]);

    return <Filtercontext.Provider value={{ ...state , setgrid,setlist , sorting,upadatefilter}} >
          {children}
    </Filtercontext.Provider>


}

export const useGlobalfilter =()=>{
    return useContext(Filtercontext)
}

