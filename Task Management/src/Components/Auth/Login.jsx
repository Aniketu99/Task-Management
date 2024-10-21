import React, { useState } from 'react'

const Login = (e) => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const submitHandler = (e)=>{
        e.preventDefault();
        console.log("email",email);
        console.log("password",password);
        setEmail("");
        setPassword("");
    }

    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <div className='border-2 border-emerald-600 p-20 rounded-xl'>
                <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-col justify-center items-center'>
                    <input
                     value={email}
                     onChange={(e)=>{setEmail(e.target.value)}}
                     required 
                     className='border-2 border-emerald-600 rounded-full py-2 px-5 text-xl text-white outline-none bg-transparent placeholder:text-gray-400' type="email" placeholder='Enter your Email' />
                    <input 
                    value={password}
                    onChange={(e)=>{setPassword(e.target.value)}}
                    required 
                    className='border-2 border-emerald-600 rounded-full py-2 px-5 text-xl mt-3 text-white outline-none bg-transparent placeholder:text-gray-400' type="password" placeholder='Enter your Password' />
                    <button type='submit' className='border-none bg-emerald-600 rounded-full py-2 px-10 text-xl mt-4 text-white outline-none w-full'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login