import React from 'react'
import { createContext ,useState} from 'react'
// import uuid from 'uuid';
import {v1 as uuid} from "uuid"; 

export const ContextList=createContext();

export const ContextListProvider=(props)=>{
     const [tasks,setTasks]=useState([
        {title:'dibbya',id:0},
        {title:'Narine',id:1},
        {title:'goods',id:2},

     ])
     const[edit,setEdit]=useState(null)


     const addUser =(title)=>{
        setTasks([...tasks,{title,id:uuid()}]);
     }
     const removeUser=(id)=>{
         setTasks(tasks.filter(task=>task.id !==id));
     }
     const removeAll=()=>{
        setTasks([]);
     }
     const findItem=(id)=>{
      const item=tasks.find(task=>task.id===id);

      setEdit(item);
     }
     const editingItem=(title,id)=>{
        const newTasks=tasks.map(task=> task.id===id?{title,id}:task);
        setTasks(newTasks);
        setEdit(null);

     }
      

     return(
        <ContextList.Provider value={{tasks,addUser,removeUser,removeAll,findItem,editingItem,edit}}>
       {props.children}
        </ContextList.Provider>
     )

    
}
