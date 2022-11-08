import React from 'react'
import {Tab} from '@headlessui/react'
import TaskForm from './TaskForm'
import Task from './Task'
import {useSelector, useDispatch} from 'react-redux'
import { deleteTask, deleteAll } from '../slices/taskSlice'

const TabMenu = () => {

  const tasks = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const active = tasks.filter((task) => !task.done);
  const completed = tasks.filter((task) => task.done);

  return (
    <div className='pt-[58px] w-full text-center'>
    <Tab.Group>
      <Tab.List className="ml-[35px] flex w-full items-center justify-center gap-[153px] font-semibold text-[14px] leading-[17px] text-[#333333] font-montserrat border border-solid pb-[18px] border-transparent">
        <Tab className="tab">All</Tab>
        <Tab className="tab">Active</Tab>
        <Tab className="tab">Completed</Tab>
      </Tab.List>
        <hr className='w-[45vw] mx-auto'/>
      <TaskForm/>
      <Tab.Panels className="mt-[32px]">
        <Tab.Panel>
           <div className='mx-auto w-1/5 flex flex-col items-start justify-center gap-[10px]'>
           {
              tasks?.map(({name, done, id}) => (
                <Task key={id} task={name} state={done}/>
              ))
            }
           </div>
        </Tab.Panel>
        <Tab.Panel>
        <div className='mx-auto w-1/5 flex flex-col items-start justify-center gap-[10px]'>
           {
              active.map(({id, name, done}) => (
                <Task key={id} task={name} state={done}/>
              ))
            }
           </div>
        </Tab.Panel>
        <Tab.Panel>
        <div className='relative mx-auto w-1/5 flex flex-col items-start justify-center gap-[10px]'>
           {
              completed.map(({id, name, done}) => (
                <div className='flex items-center relative justify-between'>
                  <Task key={id} task={name} state={done}/>
                  <img onClick={() => dispatch(deleteTask(id))} className='cursor-pointer w-[26px] h-[26px] absolute left-[406px]' src="/src/assets/trashGrey.svg" alt="delete" />
                </div>
              ))
            }
            {completed.length > 0 && (
              <button onClick={() => dispatch(deleteAll())} className='px-[27px] absolute -bottom-[80px] -right-[160px] flex items-center gap-[5px] py-[15px] bg-[#EB5757] rounded-[4px] text-white font-montserrat text-[12px] leading-[15px] font-semibold'>
              <img className='w-[18px] h-[18px]'  src="/src/assets/trashWhite.svg" alt="delete" />
              <span>delete all</span>
            </button>
            )}
           </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}

export default TabMenu