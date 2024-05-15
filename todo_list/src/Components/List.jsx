import React, { useState } from 'react';
import './List.css';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const List = () => {

  const [todo,settodo] = useState('');
  const [todos,settodos] = useState([])

  const handelChange = (e) => {
      settodo(e.target.value)
  }

  const handelAdd = () => {
    settodos([...todos,{todo,isCompleted:false}])
    settodo('')
  }

  const handelRemove  = (event) => {
    const nindex = event
    const nlist = todos.filter((item,index)=> index!==nindex)
    settodos(nlist)
  }

 const handelEdit = (event) => {
  const nindex = event
  const ntext = prompt('Edit the task') 
  settodos(todos.map((item,index)=>
   {
    if (index===nindex) {
      return {...item,todo:ntext}
    }
   }
  ))
 }

 const handelWork = (event) => {
  const nindex = event;
  settodos(todos.map((item,index)=>
    {
     if (index===nindex) {
       return {...item,isCompleted:!item.isCompleted}
     }
    }
   ))
 }

  console.log(todos)

  return (
    <>
        <div className='box'>
            <div className='flex bg-blue-500 mobile_box w-[50vw] justify-center items-center flex-col py-4'>
                 <h1 className='text-white text-3xl mb-4 font-bold'>To-Do List</h1>
                 <div className='flex w-[70%]'>
                   <input type="text" placeholder='What will you do ?' onChange={handelChange} value={todo} className='w-full px-2 h-[50px] text-lg rounded-xl outline-none' />
                   <button className='mx-5 text-white bg-[#fc6b03] rounded-[10%] font-bold w-24' onClick={handelAdd}>ADD</button>
                 </div>
                 <div className='mt-6 w-[70%]'>
                  {
                    todos.map((items,index)=>{
                      return(
                        <>
                        
                          <div className='todobox justify-center items-center w-full' key={index}>
                             <input type="checkbox" className='h-full w-full scale-90 accent-[#dc1e1e]'  onChange={()=>handelWork(index)} />
                             <h1 className={items.isCompleted ? "text-white text-xl mx-4 font-medium line-through":"text-white font-medium text-xl mx-4"}>{items.todo}</h1>
                             <button className='text-white text-xl' onClick={()=>handelEdit(index)}><FaRegEdit/></button>
                             <button className='text-white text-xl' onClick={()=>handelRemove(index)}><MdDelete/></button>
                          </div>
                        </>
                      )
                    })
                  }
                 </div>
            </div>
        </div>
    </>
  )
}

export default List
