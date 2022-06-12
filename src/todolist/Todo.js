import React from 'react'
import './todo.css'
import { useState } from 'react'
const Todo = () => {

    const [inputData,setInputData]= useState(" ");
    const [list,setList]= useState([ ]);
    const [todoediting,setTodoediting]=useState();
    const [editingtext,setEditingtext]=useState(" ");

    const handleChange =(e)=>{
        setInputData(e.target.value);
    }
    const formSubmit =(e)=>{
        e.preventDefault();
        const newTodo={
            id: new Date().getTime(),
            text:inputData,
            
        }
        if(inputData===(" ")){
            alert ("please enter any item");
        }else{
            setList([...list].concat(newTodo))
        setInputData(' ');
        }
        // setList([...list].concat(newTodo))
        // setInputData(' ');
        // if(inputData===(" ") ){
        //     alert("please inpput any  item")
        // }else{
        //     setList([...list,inputData]);
        //     setInputData(' ');
        // }
    }
    const deleteMe =(id)=>{
        const updatedItem=[...list].filter((inputData)=>{
          return inputData.id !==id
        })
        setList(updatedItem);
    }
    const editMe =(id)=>{
       const updatedTodo=[...list].map((inputData)=>{
         if(inputData.id ===id){
            inputData.text=editingtext;
         }
         return inputData;
       })
       setList(updatedTodo);
       setTodoediting();
       setEditingtext("");
    }
    
    
  return (
   <div className="todo">
    <form action="" onSubmit={formSubmit}>
    <input type="text" value={inputData} onChange={handleChange}/>
    <button type='submit'  > <i className="fa fa-plus-square-o"></i></button> <br />
    </form> <br />


    <div className="myresult">
    {list.map((inputData)=>{
        return(
        <div className="result" key={inputData.id} >
        {todoediting === inputData.id ? 
            (<input type="text" onChange={(e)=>setEditingtext(e.target.value)}  value={editingtext}/>):(<h3>{ inputData.text }</h3>)}
        
        
        <button onClick={()=>{deleteMe(inputData.id)}}><i className="fa fa-trash" ></i></button>
        {todoediting === inputData.id?(<button onClick={()=>editMe(inputData.id)}>update</button>):(<button onClick={()=>{setTodoediting(inputData.id)}}>Edit</button>)}
        
        
        </div>
        )
    })}
    
    </div>
   </div>

   
  )
}

export default Todo