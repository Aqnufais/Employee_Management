import React from 'react'

const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto py-5 flex items-center justify-start gap-5 flex-nowrap  w-full  mt-10 rounded-xl'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#e63946]'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-black px-3 py-1 rounded text-sm'>High</h3>
          <h2>18 May 2025</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Update Employee Records</h2>
        <p className='text-m mt-2'>Modify existing employee details like designation, department, and contact information in the database.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#a4d233]'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-black px-3 py-1 rounded text-sm'>High</h3>
          <h2 className='text-black'>18 May 2025</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold text-black'>Generate Monthly Attendance Report</h2>
        <p className='text-m mt-2 text-black'>Compile employee attendance data to create a detailed monthly report for HR review and analysis.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#a4d233]'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-black px-3 py-1 rounded text-sm'>High</h3>
          <h2 className='text-black'>18 May 2025</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold text-black'>Onboard New Employee</h2>
        <p className='text-m mt-2 text-black'>Add new employee information into the system and assign appropriate department and reporting manager.</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-[#0077b6]'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-black px-3 py-1 rounded text-sm'>High</h3>
          <h2>18 May 2025</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>Review Performance Feedbacks</h2>
        <p className='text-m mt-2'>Collect and analyze feedback from team leads for employee performance evaluation and improvement tracking.

</p>
      </div>
      <div className='flex-shrink-0 h-full w-[300px] p-5  rounded-xl bg-[#ffb703]'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-black px-3 py-1 rounded text-sm'>High</h3>
          <h2 className='text-black'>18 May 2025</h2>
        </div>
        <h2 className='mt-5 text-2xl font-semibold text-black'>Schedule Team Meeting</h2>
        <p className='text-m mt-2 text-black'>Arrange a meeting for the assigned department, ensuring all members are informed and available.</p>
      </div>
      
    </div>
  )
}

export default TaskList