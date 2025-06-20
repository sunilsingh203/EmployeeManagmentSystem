import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import NewTask from './NewTask'
import FailedTask from './FailedTask'

const TaskList = (data) => {
  
  return (
    <div
  id="tasklist"
  className="mt-5 h-[55%] overflow-x-auto flex items-center gap-4 px-4"
>
  {data.data.map((elem,index)=>{
    if(elem.active){
      return <AcceptTask key={index} data={elem}/>
    }
    if(elem.newTask){
      return <NewTask key={index} data={elem}/>
    }
    if(elem.completedTask){
      return <CompleteTask key={index} data={elem}/>

    }
    if(elem.failed)
    {
      return <FailedTask key={index} data={elem}/>
    }
  })}
  

</div>


  )
}

export default TaskList