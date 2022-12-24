import React from 'react';
import NavItem from './NavItem';
import { MdFavorite, MdOutlineNotes, MdAdd } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { FiPower } from 'react-icons/fi';

const NavItems = () => {
    return (
        <section>
            <NavItem icon={<MdOutlineNotes />} text="Home" index={0} />
            <NavItem icon={<MdFavorite />} text="Favorites" index={1} />
            <NavItem icon={<MdAdd />} text="New Note" index={2} />
            <NavItem icon={<FaUser />} text="Profile" index={3} />
            <NavItem icon={<FiPower />} text="Logout" index={4} />
        </section>
    );
}

export default NavItems