import React, { useEffect } from 'react';
import Navbar from '../Navbar'
import Header from './Header';
import PhoneSideBar from './PhoneSideBar';
import { useNavStore } from '../../utils/store';

const Wrapper = () => {
    const bigScreen = useNavStore(state => state.bigScreen);
    const smallScreen = useNavStore(state => state.smallScreen);
    const closePhoneSideBar = useNavStore(state => state.phoneSideBarOff);
    const isSmallScreen = useNavStore(state => state.isSmallScreen);

    useEffect(() => {
        window.onresize = () => {
            if (window.innerWidth < 700) {
                smallScreen();
            } else {
                bigScreen();
                closePhoneSideBar();
            };
        }
        if (window.innerWidth < 700) {
            smallScreen();
        } else {
            bigScreen();
            closePhoneSideBar();
        };



        return window.removeEventListener('resize', () => { })
    }, []);

    return (
        <>
            <PhoneSideBar />
            {
                isSmallScreen
                    ? <main>
                        <aside className='fixed w-0 h-screen top-0 -left-10 border-r border-gray-300 transition-all duration-150'>
                            <Navbar />
                        </aside>
                        <section className='ml-0 transition-all duration-150'>
                            <Header />
                            <div className='m-3'>
                                Hello
                            </div>
                        </section>
                    </main>
                    : <main>
                        <aside className='fixed w-60 h-screen top-0 left-0 border-r border-gray-300'>
                            <Navbar />
                        </aside>
                        <section className='ml-60'>
                            <Header />
                            <div className='m-3'>
                                Hello
                            </div>
                        </section>
                    </main>
            }
        </>
    );
}

export default Wrapper;