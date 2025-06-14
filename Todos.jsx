import React from 'react'
import Task from './Task'
import TodoItem from './TodoItem'



const Todos = ({tasks,mode,handleMode,handleDelete}) => {
  
  return (
    <>
    <div>
  
<div>
    <h1 className="text-4xl text-center">To Do List</h1>
    {tasks.length===0?( <TodoItem
         
          title="No task"
          description="No Task to display"
          btn={false}
        

        />):
    (
      tasks.map((task) =>
        <TodoItem
          key={task.sn}
          title={task.title}
          description={task.description}
          handleDelete={handleDelete}
         task={task}
         btn={true}
         mode={mode}

        />
      ))
    
}
    
 </div>
</div>
    </>
  )
}

export default Todos
