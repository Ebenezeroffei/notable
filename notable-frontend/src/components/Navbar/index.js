import React from 'react';
import SearchBar from './Searchbar';


const NavBar = () => {
    return (
        <header>
            <nav className='p-2'>
                <h1 className='text-center text-2xl font-semibold font-serif text-indigo-500 mb-16 mt-4'>Notable</h1>
                <SearchBar />
            </nav>
        </header>
    );
}

export default NavBar;