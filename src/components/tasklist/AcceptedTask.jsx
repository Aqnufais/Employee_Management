import React from 'react'

const AcceptedTask = ({data}) => {
    
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5  rounded-xl bg-[#ffb703]'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-black px-3 py-1 rounded text-sm'>{data.category}</h3>
                <h2 className='text-black'>{data.taskDate}</h2>
            </div>
            <h2 className='mt-5 text-2xl font-semibold text-black'>{data.taskTitle}</h2>
            <p className='text-m mt-2 text-black'>{data.taskDescription}</p>
            <div className='flex justify-evenly mt-10'>
                <button className='bg-black w-[45%] text-green-600 rounded py-3 px-2'>Completed</button>
                <button className='bg-black w-[45%] text-red-500 rounded py-3 px-2'>Failed</button>
            </div>
        </div>
    )
}

export default AcceptedTask