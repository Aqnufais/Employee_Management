    import React from 'react';

    const CreateTask = () => {
    return (
        <div className='p-5 bg-[#4d4b4a] mt-5 rounded'>
        <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
            <div>
                <h3 className='text-white mb-0.5'>Task Title</h3>
                <input
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'
                type='text'
                placeholder='make a ui design'
                />
            </div>
            <div>
                <h3 className='text-white mb-0.5'>Date</h3>
                <input
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'
                type='date'
                />
            </div>
            <div>
                <h3 className='text-white mb-0.5'>Assign to</h3>
                <input
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'
                type='text'
                placeholder='employee name'
                />
            </div>
            <div>
                <h3 className='text-white mb-0.5'>Category</h3>
                <input
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] mb-4'
                type='text'
                placeholder='design, dev, etc'
                />
            </div>
            </div>
            <div className='w-1/2 flex flex-col items-start'>
            <h3 className='text-white mb-0.5'>Description</h3>
            <textarea
                className='w-full h-56 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]'
                placeholder='Describe the task...'
            ></textarea>
            </div>

            <button className='bg-blue-400 py-3 px-5 hover:bg-blue-500 rounded w-full mt-4'>
            Create Task
            </button>
        </form>
        </div>
    );
    };

    export default CreateTask;
