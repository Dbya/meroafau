// import React from 'react'
// import './todo.css'
// import { useState } from 'react'
// const Todo = () => {

//     const [inputData,setInputData]= useState(" ");
//     const [list,setList]= useState([ ]);
//     const [todoediting,setTodoediting]=useState();
//     const [editingtext,setEditingtext]=useState(" ");

//     const handleChange =(e)=>{
//         setInputData(e.target.value);
//     }
//     const formSubmit =(e)=>{
//         e.preventDefault();
//         const newTodo={
//             id: new Date().getTime(),
//             text:inputData,
            
//         }
//         if(inputData===(" ")){
//             alert ("please enter any item");
//         }else{
//             setList([...list].concat(newTodo))
//         setInputData(' ');
//         }
//         // setList([...list].concat(newTodo))
//         // setInputData(' ');
//         // if(inputData===(" ") ){
//         //     alert("please inpput any  item")
//         // }else{
//         //     setList([...list,inputData]);
//         //     setInputData(' ');
//         // }
//     }
//     const deleteMe =(id)=>{
//         const updatedItem=[...list].filter((inputData)=>{
//           return inputData.id !==id
//         })
//         setList(updatedItem);
//     }
//     const editMe =(id)=>{
//        const updatedTodo=[...list].map((inputData)=>{
//          if(inputData.id ===id){
//             inputData.text=editingtext;
//          }
//          return inputData;
//        })
//        setList(updatedTodo);
//        setTodoediting();
//        setEditingtext("");
//     }
    
    
//   return (
//     <div className="main">
//    <div className="todo">
//    <h1 className='mt-4'>TODO LIST</h1>
//    <p className='mt-4'>Create your <strong>Shopping List</strong></p>
//     <form className='mt-4'  action="" onSubmit={formSubmit}>
//     <input type="text" value={inputData} onChange={handleChange}/>
//     <button type='submit'  > ADD</button> <br />
//     </form> <br />


//     <div className="myresult">
//     {list.map((inputData)=>{
//         return(
//         <div className="result" key={inputData.id} >
//         {todoediting === inputData.id ? 
//             (<input className='text' type="text" onChange={(e)=>setEditingtext(e.target.value)}  value={editingtext}/>):(<h3>{ inputData.text }</h3>)}
        
        
//         <button  className='del' onClick={()=>{deleteMe(inputData.id)}}>Delete</button>
//         {todoediting === inputData.id?(<button  className='edi' onClick={()=>editMe(inputData.id)}>update</button>):(<button className='edi' onClick={()=>{setTodoediting(inputData.id)}}>Edit</button>)}
        
        
//         </div>
//         )
//     })}
    
//     </div>
//    </div>
//    </div>

   
//   )
// }

// export default Todo