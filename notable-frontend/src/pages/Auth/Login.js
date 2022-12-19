import React, { useRef } from 'react';
import TextField from '../../components/TextField';
import PasswordTextField from '../../components/TextField/PasswordTextField';
import Button from '../../components/Button'



const Login = () => {
    const username = useRef();
    const password = useRef();

    return (
        <main>
            <section className='max-w-sm p-4 rounded border shadow mx-auto mt-[calc((100vh_-_400px)/2)]'>
                <h1 className='text-center text-2xl font-semibold text-indigo-500 font-serif '>Notable</h1>
                <p className='text-center text-md text-gray-500'>Sign In</p>
                <TextField label="Username" value={username} />
                <PasswordTextField value={password} />
                <a href="/forgot-password" className='block text-right text-indigo-500 text-xs hover:underline mb-4'>Forgot Password</a>
                <Button text="Sign In" width="w-full" />
                <p className='text-center text-xs text-gray-500 mt-4'>New To Notable? <a href="/register" className='font-semibold text-indigo-500 hover:underline'>Sign Up</a></p>
            </section>
        </main>
    );
}

export default Login;