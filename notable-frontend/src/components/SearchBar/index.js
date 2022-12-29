import React, { useState, useRef } from 'react';

const SearchBar = ({ query }) => {
    const [hasQuery, setHasQuery] = useState(false);

    const onChangeHandler = () => {
        query.current.value ? setHasQuery(true) : setHasQuery(false);
    }

    const onClickHandler = () => {
        query.current.value = '';
        setHasQuery(false);
    }

    return (
        <section className='p-3 bg-indigo-50 rounded  border focus-within:bg-indigo-100 focus-within:border-gray-100 flex items-center'>
            <input placeholder='Search...' ref={query} type="text" className='text-md font-medium text-gray-600 w-full bg-transparent outline-none' onChange={onChangeHandler} />
            {
                hasQuery && <span className='ml-1 bg-stone-300 text-sm font-semibold text-gray-600 cursor-pointer w-4 h-4 leading-3 text-center rounded hover:bg-stone-400 hover:text-white' onClick={onClickHandler}>x</span>
            }

        </section>
    );
}

export default SearchBar;