import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextField from '../../components/TextField';
import EmailTextField from '../../components/TextField/EmailTextField';
import PasswordTextField from '../../components/TextField/PasswordTextField';
import Button from '../../components/Button';
import { signUp } from '../../utils/auth';

const Register = () => {
    const username = useRef();
    const email = useRef();
    const password1 = useRef();
    const password2 = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const router = useNavigate();

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
                    <Button onClickHandler={() => signUp(username.current.value, email.current.value, password1.current.value, password2.current.value, setIsLoading, router)} isLoading={isLoading} text="Sign Up" width="w-full" />
                </div>
                <p className='text-center text-gray-600 text-xs'>Already On Notable?
                    <Link to="/login">
                        <span className='font-semibold text-indigo-500 hover:underline'> Sign In</span>
                    </Link>
                </p>
            </section>
        </main>
    );
}

export default Register;