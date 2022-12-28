import React, { useEffect, useRef } from 'react';
import SearchBar from '../components/SearchBar';
import { toast } from 'react-toastify';
import { waitTime } from '../utils/misc';

const SearchNotes = () => {
    const query = useRef();

    useEffect(() => {
        waitTime(query, () => toast("Search me Oh God."));

        return () => {
            query.current.removeEventListener('keyup', () => { });
        }
    }, []);

    return (
        <section>
            <SearchBar query={query} />
        </section>
    );
}

export default SearchNotes;