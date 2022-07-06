import React from 'react'
import { useContext,createContext ,useState} from 'react'
import { ContextList } from './ContextList'
import Task from './Task'
import Form from './Form'

const TaskList = () => {
    const{ tasks} = useContext(ContextList);
  return (
    <div className='mt-5'>
    <Form />
    <ul className="list">
    {tasks.map((task)=>{
        return <Task task={task} key={task.id}/>  //agadi ko task vaneko props ho ani {task} yo task vaneko chai value ho.map ma huni wala curElem
    })}
    </ul>
    
    </div>
  )
}

export default TaskList