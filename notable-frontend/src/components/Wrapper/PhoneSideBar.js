import React from 'react';
import NavBar from '../Navbar';
import { useNavStore } from '../../utils/store';

const PhoneSideBar = () => {
    const showPhoneSideBar = useNavStore(state => state.showPhoneSideBar);
    const isSmallScreen = useNavStore(state => state.isSmallScreen);
    const closePhoneSideBar = useNavStore(state => state.phoneSideBarOff);

    return (
        <>
            {
                isSmallScreen && showPhoneSideBar ?
                    <section className='fixed w-screen h-screen z-10 flex top-0 left-0 transition-all duration-150 z-20'>
                        <div className='flex-none w-60 bg-white'>
                            <NavBar />
                        </div>
                        <div className='w-screen bg-black bg-opacity-80 cursor-pointer' onClick={closePhoneSideBar}>
                        </div>
                    </section>
                    : <section className='fixed w-screen h-screen z-10 flex top-0 -left-full transition-all duration-150'>
                        <div className='flex-none w-60 bg-white'>
                            <NavBar />
                        </div>
                        <div className='w-screen'>

                        </div>
                    </section>
            }
        </>

    );
}

export default PhoneSideBar;