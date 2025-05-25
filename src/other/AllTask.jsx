import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {
    
    const authData = useContext(AuthContext)
    console.log(authData.employees);
    
  return (
    
        <div className='bg-[#4d4b4a] rounded mt-5 p-5 '>
    <div className='bg-blue-400 mb-2 rounded flex justify-between py-3 px-5'>
        <h2 className='w-1/5 '>Employee</h2>
        <h2 className='w-1/5 '>New Task</h2>
        <h2 className='w-1/5 '>Active Task</h2>
        <h2 className='w-1/5 '>Completed</h2>
        <h2 className='w-1/5 '>Failed</h2>
    </div>

    {/* Make sure this has a fixed height */}
    <div className=''>
        {authData.employees.map((elem, index) => (
        <div key={index} className='bg-black mb-2 rounded flex justify-between py-3 px-5'>
            <h2 className='w-1/5'>{elem.firstName}</h2>
            <h3 className='w-1/5 text-lg font-medium text-[#0077b6]'>{elem.taskCount.newTask}</h3>
            <h3 className='w-1/5 text-lg font-medium text-[#ffb703]'>{elem.taskCount.active}</h3>
            <h3 className='w-1/5 text-lg font-medium text-[#a4d233]'>{elem.taskCount.completed}</h3>
            <h3 className='w-1/5 text-lg font-medium text-[#e63946]'>{elem.taskCount.failed}</h3>
        </div> 
        ))}
    </div>
    </div>

  )
}

export default AllTask