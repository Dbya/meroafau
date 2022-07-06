import React from 'react'
import { useState } from "react"
import { useForm } from "react-hook-form";
import './remainder.css'

const Remainder = () => {
   
  const [item,setItem]=useState({date:'',time:'',text:''})
    const [list, _setList] = useState([]);
    const { register, handleSubmit, watch,reset, formState: { errors } } = useForm();
    let current = new Date();
    let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes();

    console.log(cTime)
    // const newId={
    //   id:new Date().getTime,
    //   text:item,
    // }
    // setItem([...item].concat(newId))
    // const time = new Date().toLocaleTimeString();
    // setInterval(time,1000);
    // console.log(time);
    // setInterval(cTime,1000);
    const onSubmit = data =>{
    //   const newTodo={
    //     id: new Date().getTime(),
    //     text:item,
        
    // }
    const newlist = { ...item, id: new Date().getTime().toString()}
    if(cDate){
        list.push(newlist);
        reset();
        console.log(list)
    }
    // if(cDate==(data.date)){
    //  console.log("dibbya");
    // }
    
    console.log(data.date);
    console.log(data.time);
    console.log(cDate)
    // let current = new Date();
    // let sDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
    // let sTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    // let dateTime = sDate + ' ' + sTime;
    // console.log(dateTime)
 
    } 
    
  return (
    <div className="main">
    <div className="remainderHeader">
    <h1 >Set your remainder</h1>
    <form action="" onSubmit={handleSubmit(onSubmit)}>
    <label htmlFor="date">Date:</label>
    <input {...register("date",{required:true,min:{
        value:cDate,
        message:"enter valid date",
    }})}
     type="date" name='date' /><br />
     {errors.date && (<span className='fg'>{errors.date.message}</span>)} <br />
     <label htmlFor="time">Time:</label>
     <input {...register("time",{required:true})}
    type="time" name='time' /><br />
    {errors.time && (<span className='fg'>{errors.time.message}</span>)} <br />
    <label htmlFor="text">Subject:</label>
     <input {...register("text",{required:true})}
    type="text" name='text' /><br />
    {errors.text && (<span className='fg'>{errors.text.message}</span>)} <br />
    
     
    <button type='submit'  >Add Remainder</button>
    </form>
    </div>
   <div className="myresult">
   <h1 className='' >My remainders:</h1>
    <div className="remainders">
    
    {list.map((index)=>{
     
        const{date,time,text}=index;
        // let id=new Date().getTime();
        return(
               
                <div className="remain" key={index}  >
               
                <ul>
                <li>
                <p>You have <strong> {text}</strong>  on &nbsp; {date} &nbsp; at {time}</p>
                </li>
                </ul>
                </div>
                
        )
    })}
    </div>
    </div>
    </div>
  )
}

export default Remainder