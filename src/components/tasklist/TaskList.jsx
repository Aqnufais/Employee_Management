import React from 'react'
import AcceptedTask from './AcceptedTask'
import CompletedTask from './CompletedTask'
import FailedTaskk from './FailedTaskk'
import NewTaskk from './NewTaskk'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto py-5 flex items-center justify-start gap-5 flex-nowrap  w-full  mt-10 rounded-xl'>
      {
        data.tasks.map((elem) => {
          if(elem.active){
            return <AcceptedTask />
          }
          if(elem.newTask){
            return <NewTaskk />
          }
          if(elem.completed){
            return <CompletedTask />
          }
          if(elem.failed){
            return <FailedTaskk />
          }
        })
      }
    </div>
  )
}

export default TaskList