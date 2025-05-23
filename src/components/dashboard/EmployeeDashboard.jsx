import React from 'react'
import Header from '../../other/Header'
import TaskListNum from '../../other/TaskListNum'
import TaskList from '../tasklist/TaskList'

const EmployeeDashboard = ({data}) => {
    return (
        <div className='p-10 h-screen'>
            <Header data={data}/>
            <TaskListNum data={data}/>
            <TaskList data={data}/>
        </div>
    )
}

export default EmployeeDashboard