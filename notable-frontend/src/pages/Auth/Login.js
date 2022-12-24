import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '../../components/TextField';
import PasswordTextField from '../../components/TextField/PasswordTextField';
import Button from '../../components/Button';
import { signIn } from '../../utils/auth';



const Login = () => {
    const [isLoading, setIsLoading] = useState(false);
    const username = useRef();
    const password = useRef();
    const router = useNavigate();

    return (
        <main>
            <section className='max-w-sm p-4 rounded border shadow mx-auto mt-[calc((100vh_-_400px)/2)]'>
                <h1 className='text-center text-2xl font-semibold text-indigo-500 font-serif '>Notable</h1>
                <p className='text-center text-md text-gray-500'>Sign In</p>
                <TextField label="Username" value={username} />
                <PasswordTextField value={password} />
                <Link to='/forgot-password'>
                    <span className='block text-right text-indigo-500 text-xs hover:underline mb-4'>Forgot Password</span>
                </Link>
                <Button isLoading={isLoading} onClickHandler={() => signIn(username.current.value, password.current.value, setIsLoading, router)} text="Sign In" width="w-full" />
                <p className='text-center text-xs text-gray-500 mt-4'>New To Notable?
                    <Link to="/register">
                        <span className='font-semibold text-indigo-500 hover:underline'> Sign Up</span>
                    </Link>
                </p>
            </section>
        </main>
    );
}

export default Login;