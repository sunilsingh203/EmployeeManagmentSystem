import React, { useState } from 'react'

const CreateTask = () => {

    const [taskTitle, settaskTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [assignTo, setassignTo] = useState('')
    const [date, setdate] = useState('')
    const [Category, setCategory] = useState('')

    const [newTask, setNewTask] = useState({})


    const submitHandler =(e)=>{
            e.preventDefault()
            setNewTask({taskTitle,Description,Description,date,active:false,newTask:true,completedTask:false,failed:false})
           
            const data = JSON.parse(localStorage.getItem('employees'))
            data.forEach( (elem)=> {
                if(assignTo== elem.firstname){
                    elem.tasks.push(newTask)
                    console.log(elem.tasks)
                }
                
            });
            settaskTitle('')
            setCategory('')
            setDescription('')
            setdate('')
            setassignTo('')
    }
  return (
     <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e)=>{
                                settaskTitle(e.target.value)
                            }}  
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input
                            value={date}
                            onChange={(e)=>{
                                setdate(e.target.value)
                            }} 
                           
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
                        <input
                           value={assignTo}
                            onChange={(e)=>{
                                setassignTo(e.target.value)
                            }} 
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input
                            value={Category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }} 
                            
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea 
                    value={Description}
                            onChange={(e)=>{
                                setDescription(e.target.value)
                            }} 
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>

            </form>
        </div>
  )
}

export default CreateTask