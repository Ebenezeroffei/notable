import React from 'react';
import TextField from '.';
import { passwordRegex } from '../../utils/validation';

const PasswordTextField = ({ value, isRequired = true, label = "Password", inputValue = '', helpText = 'Password should be at least 8 characters long, it should have at least one uppercase, one lower case, a number a special character !@#><*~.', errorText = 'Password should be at least 8 characters long, it should have at least one uppercase, one lower case, a number a special character !@#><*~.', }) => {
    const textType = 'password';

    return (
        <TextField pattern={passwordRegex} value={value} errorText={errorText} textType={textType} inputValue={inputValue} isRequired={isRequired} label={label} helpText={helpText} />
    );
}

export default PasswordTextField;