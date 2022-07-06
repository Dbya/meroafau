import React from 'react'
import TaskList from './TaskList'
import { ContextListProvider } from './ContextList'

const Main = () => {
  return (
    <div>
    <ContextListProvider>
    <div>
    <TaskList/>
    </div>
    </ContextListProvider>
    
    </div>
  )
}

export default Main