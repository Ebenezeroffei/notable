import React from 'react';
import TextField from '.';
import { emailRegex } from '../../utils/validation';

const EmailTextField = ({ value, isRequired = true, inputValue = '' }) => {
    const textType = 'email';

    return (
        <TextField pattern={emailRegex} label="Email" inputValue={inputValue} value={value} errorText="Please provide a valid email." textType={textType} isRequired={isRequired} />
    );
}

export default EmailTextField;