import React from 'react';
import buttonLoader from '../../assets/images/button_loader.png';

const Button = ({ text, width, isLoading, onClickHandler }) => {
    return (
        <section>
            {
                isLoading
                    ? <button className={`bg-indigo-500 text-white shadow py-2 text-sm font-medium rounded active:bg-indigo-600 ${width}`}>
                        <img src={buttonLoader} className="mx-auto" width="20" alt="Button Loader" />
                    </button>
                    : <button onClick={onClickHandler} className={`bg-indigo-500 text-white shadow py-2 text-sm font-medium rounded active:bg-indigo-600 ${width}`}>
                        {text}
                    </button>
            }
        </section>
    );
}

export default Button;