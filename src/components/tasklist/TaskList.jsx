import React from 'react'
import AcceptedTask from './AcceptedTask'
import CompletedTask from './CompletedTask'
import FailedTaskk from './FailedTaskk'
import NewTaskk from './NewTaskk'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto py-5 flex items-center justify-start gap-5 flex-nowrap  w-full  mt-10 rounded-xl'>
      {
        data.tasks.map((elem, idx) => {
          if(elem.active){
            return <AcceptedTask key={idx} data={elem} />
          }
          if(elem.newTask){
            return <NewTaskk key={idx} data={elem} />
          }
          if(elem.completed){
            return <CompletedTask key={idx} data={elem} />
          }
          if(elem.failed){
            return <FailedTaskk key={idx} data={elem} />
          }
        })
      }
    </div>
  )
}

export default TaskList