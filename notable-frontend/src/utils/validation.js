const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#\><*~\.]).{8,}/;
const emailRegex = /^[a-zA-Z][a-zA-Z\d]+@[a-z]+\.[a-z]{3,}(\.[a-z]{2,})?$/;
const nameRegex = /^[a-zA-Z]{3,}\s+(([a-zA-Z]\.\s+)?)*([a-zA-Z](-[a-zA-Z])?(\s+)?)+$/;

const textOnBlurHandler = (pattern, value, setIsError) => {
    pattern.test(value)
        ? setIsError(false)
        : setIsError(true);
}

const passwordValidation = (password) => {
    return passwordRegex.test(password);
}

const emailValidation = (email) => {
    return emailRegex.test(email);
}




export { textOnBlurHandler, passwordRegex, emailRegex, nameRegex, passwordValidation, emailValidation }; 