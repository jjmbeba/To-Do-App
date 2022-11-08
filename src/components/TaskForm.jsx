import React, { useState } from 'react'
import {useDispatch , useSelector} from 'react-redux'
import { setTasks } from '../slices/taskSlice';

const TaskForm = () => {

  const [newTask, setNewTask] = useState(null);
  let taskString;

  const dispatch = useDispatch();

  const tasks = useSelector((state) => state);

  const d = new Date;
  console.log();

  const handleChange = (e) => {
    taskString = e.target.value;
    setNewTask({
      id: d.toString(),
      name:taskString,
      done:false
    });
  }

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(setTasks(newTask));
    e.target.form[0].value = "";
  }

  return (
    <form id='taskForm' className='mt-[36px] font-montserrat'>
        <input onChange={handleChange} className='pl-[12px] py-[20px] rounded-[12px] border border-solid border-[#BDBDBD] w-[476px]' type="text" placeholder='add details'/>
        <button onClick={handleClick} type='submit' className='ml-[25px] bg-[#2F80ED] py-[20px] px-[40px] text-white rounded-[12px] text-[14px] leading-[17px] font-semibold'>Add</button>
    </form>
  )
}

export default TaskForm;