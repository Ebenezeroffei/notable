import React from 'react';
import NavItem from './NavItem';
import { MdFavorite, MdOutlineNotes, MdAdd, MdSearch } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';

const NavItems = () => {
    return (
        <section className='h-[calc(100vh_-_120px)] overflow-auto'>
            <NavItem icon={<MdOutlineNotes />} text="Notes" index={0} />
            <NavItem icon={<MdFavorite />} text="Favorites" index={1} />
            <NavItem icon={<MdSearch />} text="Search" index={2} />
            <NavItem icon={<FaUser />} text="Profile" index={3} />
            <NavItem icon={<FiPower />} text="Logout" isLogout={true} index={4} />
        </section>
    );
}

export default NavItems