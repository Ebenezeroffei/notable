import React from 'react';

const PersonalInfo = ({ label, value }) => {
    return (
        <div className='border shadow p-3 bg-indigo-100 rounded'>
            <h3 className='text-gray-800'>{value}</h3>
            <p className='text-indigo-500 text-xs font-semibold uppercase'>{label}</p>
        </div>
    );
}

export default PersonalInfo;