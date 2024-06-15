import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div className='bg-black min-h-screen grid place-items-center'>
            <button type='button' className='bg-white px-8 py-4 flex gap-2 items-center'>
                <FcGoogle /> sing in white Google
            </button>
        </div>
    )
}

export default Login