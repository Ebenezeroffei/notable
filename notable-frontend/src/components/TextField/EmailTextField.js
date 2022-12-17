import React from 'react';
import TextField from '.';
import { emailRegex } from '../../utils/validation';

const EmailTextField = ({ isRequired = true, value }) => {
    const textType = 'email';


    return (
        <TextField pattern={emailRegex} label="Email" value={value} errorText="Please provide a valid email." textType={textType} isRequired={isRequired} />
    );
}

export default EmailTextField;