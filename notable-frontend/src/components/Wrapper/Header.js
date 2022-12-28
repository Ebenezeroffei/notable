import React from 'react';
import { MdMenu } from 'react-icons/md';
import { useNavStore } from '../../utils/store';

const Header = () => {
    const isSmallScreen = useNavStore(state => state.isSmallScreen);
    const openPhoneSideBar = useNavStore(state => state.phoneSideBarOn);
    const currentNavName = useNavStore(state => state.currentNavName);

    return (
        <section className='bg-white bg-opacity-90 border-b w-full p-3 flex justify-between items-center shadow sticky top-0 z-10'>
            <h1 className='text-3xl text-gray-600'>{currentNavName}</h1>
            {
                isSmallScreen && <MdMenu onClick={openPhoneSideBar} className='text-indigo-500 hover:text-indigo-800 cursor-pointer transition-colors duration-250' size={30} />
            }
        </section>
    );
}

export default Header;