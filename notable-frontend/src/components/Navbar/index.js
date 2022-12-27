import React from 'react';
import NavItems from './NavItems';
import SearchBar from './Searchbar';


const NavBar = () => {
    return (
        <header>
            <nav className='p-2 h-screen overflow-hidden'>
                <h1 className='text-center text-2xl font-semibold font-serif text-indigo-500 mb-16 mt-4'>Funny</h1>
                {/* <SearchBar /> */}
                <NavItems />
            </nav>
        </header>
    );
}

export default NavBar;