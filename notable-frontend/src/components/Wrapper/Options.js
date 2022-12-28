import React from 'react';

const Options = ({ children }) => {

    return (
        <section className='fixed z-10 bottom-3 right-3 flex'>
            {children}
        </section>
    );
}

export default Options;