import React from 'react'

const Header = () => {

    const logOut =  () => {
        localStorage.setItem('loggedInUser', '')
        window.location.reload()
    }

    return (
        <div className='flex items-end justify-between '>
            <h1 className='text-2xl font-medium'>hello <br/> <span className='text-3xl font-semibold'>username 👋🏻</span></h1>
            <button onClick={logOut} className='bg-orange-400 px-5 py-2 text-lg font-medium rounded-md'>Log Out</button>
        </div>
    )
    }

export default Header