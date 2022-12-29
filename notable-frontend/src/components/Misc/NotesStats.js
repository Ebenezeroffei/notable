import React from 'react';

const NotesStats = ({ icon, label, value }) => {
    return (
        <div className='border shadow p-3 bg-indigo-500 rounded flex gap-x-4 items-center'>
            {icon}
            <section>
                <h3 className='text-white text-4xl font-semibold'>{value}</h3>
                <p className='text-white font-semibold opacity-90 capitalize'>{label}</p>
            </section>
        </div>
    );
}

export default NotesStats;