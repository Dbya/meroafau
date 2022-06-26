import React from 'react'
import { useState } from 'react'

const Nextremainder = () => {
const [item,setItem] = useState({
    date:'',
    time:''
})
 const [list,setList]=useState([ ])
const handleChange=(e)=>{
    const name = e.target.name;
    const value = e.target.value;
    console.log(name,value);
    setItem({...item, [name]:value,});
}
// let current = new Date();
// let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();

const addMe =(e)=>{
    e.preventDefault();
    const newlist = { ...item, id: new Date().getTime().toString()}
    if(item===(" ")){
        alert("oops no any item")
    }else{
        setList([...list,newlist]);
        console.log(list);
        setItem({date:'',time:''})
    }
    
    
   

}
  return (
    <div className="main">
    <div className="form">
    <form action="" >
    <label htmlFor="date">Date</label>
    <input type="date" value={item.date} name='date'  onChange={handleChange}/> <br />
    <label htmlFor="time">Time</label>
    <input type="time" name='time' value={item.time} onChange={handleChange}/> <br />
    <button onClick={addMe}>submit</button>
    </form>
    </div>
    <div className="result">
    {list.map((curelem)=>{
        const{id,date,time}=curelem;
        return(
            <div className="result" key={id}>
            <p>{date}</p>
            <p>{time}</p>
            </div>
        )
    })}
    </div>
    </div>
  )
}

export default Nextremainder