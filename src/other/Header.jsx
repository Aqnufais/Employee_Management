import React from 'react'

const Header = ({data}) => {
    return (
        <div className='flex items-end justify-between '>
            <h1 className='text-2xl font-medium'>hello <br/> <span className='text-3xl font-semibold'>{data.firstName} 👋🏻</span></h1>
            <button className='bg-orange-400 px-5 py-2 text-lg font-medium rounded-md'>Log Out</button>
        </div>
    )
    }

export default Header