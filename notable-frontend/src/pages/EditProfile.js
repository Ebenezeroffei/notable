import React, { useEffect, useRef, useState } from 'react';
import Button from '../components/Button';
import TextField from '../components/TextField';
import EmailTextField from '../components/TextField/EmailTextField';
import { useNavStore } from '../utils/store';

const EditProfile = () => {
    const navigateTo = useNavStore(state => state.navigateTo);
    const firstName = useRef();
    const lastName = useRef();
    const username = useRef();
    const email = useRef();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigateTo(3, "Edit Profile");
    }, []);

    return (
        <section>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5'>
                <TextField value={firstName} label="First Name" isRequired={false} />
                <TextField value={lastName} label="Last Name" isRequired={false} />
                <TextField value={username} inputValue="Hello" label="Username" isRequired={true} />
                <EmailTextField inputValue='eoffei@gmail.com' value={email} />
            </div>
            <div className='my-5 text-center'>
                <Button isLoading={isLoading} text="Save Changes" width="w-1/2 md:w-1/3 lg:w-1/4" />
            </div>
        </section>
    );
}

export default EditProfile;