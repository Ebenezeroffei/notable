import React, { useState } from 'react';
import { textOnBlurHandler } from '../../utils/validation';

const TextArea = ({ value, label, isRequired = true, inputValue = '', helpText = '', errorText = 'Please provide a valid value.', pattern = /.+/, }) => {
    const [isError, setIsError] = useState(false);
    const [inputValueState, setInputValueState] = useState(inputValue);

    const onChangeHandler = (ele) => {
        setInputValueState(ele.target.value);
    }

    return (
        <section className='my-3'>
            <label htmlFor="" className='text-gray-500 font-medium ml-1'>{label}:</label>
            {
                isRequired &&
                <span className='ml-1 text-red-500 text-lg'>*</span>
            }
            <textarea ref={value} value={inputValue} onBlur={() => textOnBlurHandler(pattern, value.current.value, setIsError)} className='outline-none block w-full border rounded focus:border-gray-300 focus:bg-gray-100 py-1 px-2 text-gray-600 bg-gray-50' rows={10} ></textarea>
            {
                isError
                    ? <p className='text-xs text-rose-500 ml-1'>{errorText}</p>
                    : <p className='text-xs text-gray-500 ml-1'>{helpText}</p>
            }
        </section >
    );
}

export default TextArea;