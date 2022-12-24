import React from 'react';
import { Link } from 'react-router-dom';
import { useNavStore } from '../../utils/store';


const NavItem = ({ icon, text, index }) => {
    const currentNavIndex = useNavStore(state => state.currentNavIndex);
    const navigateTo = useNavStore(state => state.navigateTo);

    return (
        <>
            {
                currentNavIndex === index
                    ? <Link onClick={() => navigateTo(index)} className='w-full flex items-center  p-2 rounded border bg-indigo-500 shadow text-white mb-3'>
                        <span className='mr-3'>
                            {icon}
                        </span>
                        <span>{text}</span>
                    </Link>
                    : <Link onClick={() => navigateTo(index)} className='w-full flex items-center  p-2 rounded border bg-indigo-50 shadow text-gray-800 hover:bg-indigo-100 mb-3'>
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