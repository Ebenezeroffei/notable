import React from 'react';

const Button = ({ text, width, onClickHandler = () => { } }) => {
    return (
        <section>
            <button onClick={onClickHandler} className={`bg-indigo-500 text-white shadow py-2 text-sm font-medium rounded active:bg-indigo-600 ${width}`}>
                {text}
            </button>
        </section>
    );
}

export default Button;