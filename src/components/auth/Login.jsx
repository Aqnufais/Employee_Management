import { useState } from "react"
import React from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submiHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password)
        setEmail("")
        setPassword("")
        
    }

    return (
        <div className='flex h-screen w-screen items-center justify-center '>
            <div className='border-2 border-orange-400 p-20 rounded-xl'>
                <form 
                onSubmit={(e) => {
                    submiHandler(e)
                }}
                className='flex flex-col items-center justify-center '>
                    <input 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required className='text-white border-2 rounded-full outline-none border-orange-400 placeholder:text-gray-400 bg-transparent py-2 px-6 text-xl' type="email" placeholder='enter your email' />
                    <input
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required className='text-white border-2 rounded-full mt-3 outline-none border-orange-400 placeholder:text-gray-400 bg-transparent py-2 px-6 text-xl' type="password" placeholder='enter your password' />
                    <button  className='border-2 py-2 px-8 rounded-full outline-none border-none mt-8 text-white bg-orange-400 text-xl'>Log in</button>
                </form>
            </div>
        </div>
    ) 
}

export default Login