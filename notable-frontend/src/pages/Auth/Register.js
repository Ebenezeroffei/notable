import React, { useRef } from 'react';
import TextField from '../../components/TextField';
import EmailTextField from '../../components/TextField/EmailTextField';
import PasswordTextField from '../../components/TextField/PasswordTextField';
import Button from '../../components/Button';

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password1 = useRef();
    const password2 = useRef();

    return (
        <main>
            <section className='p-4 rounded border shadow mx-auto max-w-sm mt-[calc((100vh_-_564px)/2)]'>
                <h1 className='text-center text-indigo-500 font-serif font-semibold text-2xl'>Notable</h1>
                <p className='text-center text-md text-gray-500'>Sign Up</p>
                <TextField label="Username" value={username} />
                <EmailTextField value={email} />
                <PasswordTextField value={password1} />
                <PasswordTextField value={password2} label="Password Confirmation" />
                <div className='my-4'>
                    <Button text="Sign Up" width="w-full" />
                </div>
                <p className='text-center text-gray-600 text-xs'>Already On Notable? <a href="/login" className='font-semibold text-indigo-500 hover:underline'>Sign In</a></p>
            </section>
        </main>
    );
}

export default Register;