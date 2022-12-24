import { toast } from 'react-toastify';
import { passwordValidation, emailValidation } from './validation';
import { fetchPostData } from './misc';


const signIn = async (username, password, setIsLoading, router) => {

    if (username && passwordValidation(password)) {
        setIsLoading(true);
        const url = `${process.env['REACT_APP_AUTH_ENDPOINT_URL']}login/`;
        const formData = new FormData();
        formData.set('username', username);
        formData.set('password', password);
        const [res, data] = await fetchPostData(url, formData);
        setIsLoading(false);
        if (res) {
            // TODO: Set cookies
            toast.success("Login successful");
            router('/register');
        }
        else {
            toast.error(data['message']);
        }
    }
}


const signUp = async (username, email, password1, password2, setIsLoading, router) => {
    if (username && emailValidation(email) && passwordValidation(password1) && password1 === password2) {
        setIsLoading(true);
        const url = `${process.env['REACT_APP_AUTH_ENDPOINT_URL']}register/`;
        const formData = new FormData();
        formData.set('username', username);
        formData.set('password', password1);
        formData.set('email', email);
        const [res, data] = await fetchPostData(url, formData);
        setIsLoading(false);
        if (res) {
            // TODO: Set cookies
            toast.success("Registration successful");
            router('/login');
        }
        else {
            toast.error(data['username'][0]);
        }
    }
}

export { signIn, signUp };