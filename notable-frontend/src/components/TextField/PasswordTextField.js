import React from 'react';
import TextField from '.';
import { passwordRegex } from '../../utils/validation';

const PasswordTextField = ({ isRequired = true, label = "Password", value, helpText = 'Password should be at least 8 characters long, it should have at least one uppercase, one lower case, a number a special character !@#><*~.', errorText = 'Password should be at least 8 characters long, it should have at least one uppercase, one lower case, a number a special character !@#><*~.', }) => {
    const textType = 'password';

    return (
        <TextField pattern={passwordRegex} value={value} errorText={errorText} textType={textType} isRequired={isRequired} label={label} helpText={helpText} />
    );
}

export default PasswordTextField;