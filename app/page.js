
"use client"
import React, {useState} from 'react'


export const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()
    
    setmainTask([...mainTask, {task, desc}])

    settask("")
    setdesc("")
    console.log(mainTask)
  }

  const deleteHandler = (i) => {
        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setmainTask(copyTask)
  }


  let RenderTask = <h2>No Task Available</h2>

  if(mainTask.length>0) {
  RenderTask=mainTask.map((t,i) => {
    return (

      <li key={i} className='flex items-center justify-between mb-8'>
      <div className='flex items-center justify-between mb-5 w-2/3'>

        <h5 className='text-2xl font-semibold'>{t.task}</h5> 
        <h6 className='text-lg font-semibold'>{t.desc}</h6>

      </div>
      <button onClick={deleteHandler}
      
      className='bg-black text-white px-4 py-2 rounded font-bold'>Delete</button>
      </li>
    )
  })
}


  return (
    <>
    <h1 className='bg-black text-white p-5 text-3xl text-center' >Todo List</h1>

    <form onSubmit={submitHandler}>

      <input type="text" className='text-xl border-zinc-800 border-2 m-9 px-4 py-2'
      placeholder='Enter task'
      value={task}
      onChange={(e) => {
        settask(e.target.value)
      }}
       />

      <input type="text" className='text-xl border-zinc-800 border-2 m-9 px-4 py-2'
      placeholder='Enter description'
      value={desc}
      onChange={(e) => {
        setdesc(e.target.value)
      }}
       />

      <button className='bg-black text-white px-4 py-2 text-xl rounded m-5'>Add Task</button> 

    </form>

    <hr />
    <div className='p-8 bg-slate-300'>
      <ul>
        {RenderTask}
      </ul>
    </div>
    </>
   
  )
}

export default page