import React from 'react';
import { MdMenu } from 'react-icons/md';

const Header = () => {
    return (
        <section className='sticky bg-white bg-opacity-90 border-b w-full p-3 flex justify-between top-0 left-0 items-center shadow'>
            <h1 className='text-2xl font-semibold text-gray-600'>Header</h1>
            <MdMenu className='text-indigo-500 hover:text-indigo-800 cursor-pointer transition-colors duration-250' size={30} />
        </section>
    );
}

export default Header;