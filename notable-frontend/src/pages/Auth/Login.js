import { useRef } from "react";
import TextField from "../../components/TextField";
import PasswordTextField from "../../components/TextField/PasswordTextField";
import Button from '../../components/Button';
// import backdrop from '../../../public/images/backdrop.jpg'

const Login = () => {
    const username = useRef();
    const password = useRef();

    return (
        <main>
            <section className="max-w-sm p-4 rounded shadow mx-auto border mt-6">
                <h1 className="text-center font-semibold text-2xl text-indigo-500 font-serif">Notable</h1>
                <p className="text-center text-gray-400 text-lg">Sign In</p>
                <TextField value={username} label="Username" />
                <PasswordTextField value={password} />
                <a href="/forgot-password" className="text-right block text-indigo-500 text-xs mb-5 hover:underline">Forgot Password</a>
                <Button width="w-full" text="Sign In" />
                <p className="text-center mt-2 text-xs text-gray-600">New To Notable? <a href="/register" className="font-semibold text-indigo-500 hover:underline">Sign Up</a></p>
            </section>
        </main>
    );
}

export default Login;