import React from 'react';
import { MdMenu } from 'react-icons/md';
import { useNavStore } from '../../utils/store';

const Header = () => {
    const isSmallScreen = useNavStore(state => state.isSmallScreen);
    const openPhoneSideBar = useNavStore(state => state.phoneSideBarOn);

    return (
        <section className='bg-white bg-opacity-90 border-b w-full p-3 flex justify-between items-center shadow'>
            <h1 className='text-2xl font-semibold text-gray-600'>Header</h1>
            {
                isSmallScreen && <MdMenu onClick={openPhoneSideBar} className='text-indigo-500 hover:text-indigo-800 cursor-pointer transition-colors duration-250' size={30} />
            }
        </section>
    );
}

export default Header;