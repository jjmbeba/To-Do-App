import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { setTasks, updateState } from '../slices/taskSlice';

const Task = ({task, state=false}) => {

  const [done, setDone] = useState(false);

  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleClick = () => {
    setDone(!done);
    const foundIndex = tasks.findIndex((taskItem) => task === taskItem.name);
    const restTasks = tasks.filter((taskItem, i) => i !== foundIndex);
    dispatch(updateState(foundIndex))
  }

  return (
    <div className='flex items-center justify-center font-montserrat'>
        <div className='relative flex items-center justify-center gap-[7px]'>
          {
            state ? (
              <input checked onClick={handleClick} className='relative h-[24px] w-[24px] rounded-[4px] border border-solid border-[#828282] appearance-none checked:bg-[#2F80ED]' type="checkbox" name='task' />
            ) : (
              <input onClick={handleClick} className='relative h-[24px] w-[24px] rounded-[4px] border border-solid border-[#828282] appearance-none checked:bg-[#2F80ED]' type="checkbox" name='task' />
            )}
          <img src="/src/assets/check.svg" className='w-[20px] h-[20px] absolute top-[50%] translate-y-[-50%] left-[2px] pointer-events-none' alt="check" />
          <label htmlFor="task" className={`font-medium text-black text-[18px] leading-[22px] ${state && 'line-through text-[#333333] decoration-[#333333]'}`}>{task}</label>
        </div>
    </div>
  )
}

export default Task