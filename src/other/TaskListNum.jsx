import React from 'react'

const TaskListNum = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#0077b6]'>
                <h2 className='text-3xl font-semibold'>2</h2>
                <h3 className='text-2xl font-medium' >new Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 text-black  bg-[#a4d233] '>
                <h2 className='text-3xl font-semibold '>3</h2>
                <h3 className='text-2xl font-medium' >Completed Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#ffb703]'>
                <h2 className='text-3xl font-semibold text-black'>0</h2>
                <h3 className='text-2xl font-medium text-black' >Acceptedd Task</h3>
            </div>
            <div className='rounded-xl w-[45%] py-6 px-9 bg-[#e63946] '>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-2xl font-medium' >Failed Task</h3>
            </div>
        </div>
    )
}

export default TaskListNum