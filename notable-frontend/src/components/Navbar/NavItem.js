import React from 'react';
import { Link } from 'react-router-dom';
import { useNavStore } from '../../utils/store';


const NavItem = ({ icon, text, index, isLogout = false }) => {
    const currentNavIndex = useNavStore(state => state.currentNavIndex);
    const navigateTo = useNavStore(state => state.navigateTo);

    return (
        <>
            {
                isLogout
                    ? <Link className='w-full flex items-center border border-gray-100  p-2 rounded bg-red-400 shadow text-white mb-3 hover:bg-red-500'>
                        <span className='mr-3'>
                            {icon}
                        </span>
                        <span>{text}</span>
                    </Link>
                    : currentNavIndex === index
                        ? <Link onClick={() => navigateTo(index)} className='w-full flex items-center border border-gray-100  p-2 rounded bg-indigo-500 shadow text-white mb-3'>
                            <span className='mr-3'>
                                {icon}
                            </span>
                            <span>{text}</span>
                        </Link>
                        : <Link onClick={() => navigateTo(index)} className='w-full flex items-center border border-gray-100  p-2 rounded bg-indigo-50 shadow text-gray-800 hover:bg-indigo-100 mb-3'>
                            <span className='mr-3'>
                                {icon}
                            </span>
                            <span>{text}</span>
                        </Link>

            }
        </>
    );
}

export default NavItem