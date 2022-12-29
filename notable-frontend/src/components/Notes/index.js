import React from 'react';
import Note from './Note';

const Notes = () => {
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mb-20'>
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
        </section>
    );
}

export default Notes;