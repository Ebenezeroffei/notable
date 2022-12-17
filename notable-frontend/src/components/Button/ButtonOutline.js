import React from 'react';

const Button = ({ text, onClickHandler = () => { } }) => {
    return (
        <section>
            <button onClick={onClickHandler} className='bg-white border-2 border-indigo-500 text-indigo-500 shadow w-60 py-2 text-sm font-medium rounded transition-colors duration-100 active:bg-indigo-600 active:text-white'>
                Hello
            </button>
        </section>
    );
}

export default Button;