import React from 'react'
import Header from '../../other/Header'
import CeateTask from '../../other/CeateTask'
import AllTask from '../../other/AllTask'

const AdminDash = () => {
    return (
        <div className='h-screen w-full p-7'>
            <Header />
            <CeateTask />
            <AllTask />
        </div>
    )
}

export default AdminDash