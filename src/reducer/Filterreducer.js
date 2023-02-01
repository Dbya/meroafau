const Filterreducer=(state,action)=>{
  switch (action.type) {

      case "Load_Filter_Data":
      return {
       ...state,
       filteredProduct:[...action.payload],
       allProducts:[...action.payload],
     }
     break;
     
     case "Grid_View":
      return{
        ...state,
        gridview:true,
      }
      break;

      case "List_View":
      return{
        ...state,
        gridview:false,
      }
      break;

      case "Sort_Item":
        let usersortitem=document.getElementById("sort");
        let sortvalue=usersortitem.options[usersortitem.selectedIndex].value;
        console.log("my sort items" , sortvalue)
      return{
        ...state,
        sortingvalue:sortvalue,
      }
      break;

      case "Sorted_Product":
        let newsortproduct;

        const {filteredProduct}=state;
        let tempsortproduct=[...filteredProduct];
        if(state.sortingvalue === "a-z"){
          newsortproduct = tempsortproduct.sort((a,b)=>
           a.title.localeCompare(b.title)
          )
        }
       
        if(state.sortingvalue === "z-a"){
          newsortproduct = tempsortproduct.sort((a,b)=>
           b.title.localeCompare(a.title)
          )
        }
       
        if(state.sortingvalue === "lowest"){
          const sortingprice=(a,b)=> {
            return a.price-b.price;
          }
          newsortproduct = tempsortproduct.sort(sortingprice);
        }
        if(state.sortingvalue === "highest"){
          const sortingprice=(a,b)=> {
            return b.price-a.price;
          }
          newsortproduct = tempsortproduct.sort(sortingprice);
        }

      return{
        ...state,
        filteredProduct: newsortproduct,
      }
      break;
     
      case "Search_My_Input":
        const {name,value}=action.payload;
        return{
          ...state,
          searchfilter:{
           ...state.searchfilter,
           [name]:value,
        }
        }
        break;
        
        case "Filtered_Product":
       let {allProducts}=state;
       let tempfilterproduct=[...allProducts];
      const {text ,category}= state.searchfilter;

     if(text){
      tempfilterproduct= tempfilterproduct.filter((curElem)=>{
        return curElem.title.toLowerCase().includes(text);
      })
     }
     if(category){
      tempfilterproduct= tempfilterproduct.filter((curElem)=>{
        return curElem.category ===  category;
      })
     }

        return{
          ...state,
          filteredProduct: tempfilterproduct,
        }
        
        break;



    default : 
    return state;
  }
}
export default Filterreducer