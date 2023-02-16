const productReducer =(state , action )=>{

    
   switch (action.type) {
    case "Is_Loading":
        return{
            ...state,
            isLoading:true,
        }
        break;
       
        case "Give_All_Data":
            const featureData= action.payload.filter((curElem)=>{
                return curElem.rating < 4.1 ;
            })
            return {
                ...state,
                isLoading:false,
                product:action.payload,
               featureProduct: featureData,

            }
            break;

        case "Give_My_Error":
        return{
            ...state,
            isLoading:false,
            isError:true,
           
        }
        break;

        case "Is_Single_Loading":
            return{
                ...state,
                isSingleloading:true,
               
            }
            break;

            case "Give_All_SINGLE_Data":
            
                return {
                    ...state,
                    isSingleloading:false,
                   singleproduct:action.payload,
                   
    
                }
                break;   
        
        
                case "Give_My_Single_Error":
                    return{
                        ...state,
                        isSingleloading:false,
                        isError:true,
                       
                    }
                    break;   
       default:
      return state
      
    }

}

export default productReducer;