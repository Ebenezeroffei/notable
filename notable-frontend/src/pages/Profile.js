import React from 'react';
import { MdNotes } from 'react-icons/md';
import PersonalInfo from '../components/Misc/PersonalInfo';
import Options from '../components/Wrapper/Options';
import { MdEdit, MdStar } from 'react-icons/md';
import NotesStats from '../components/Misc/NotesStats';

const Profile = () => {
    return (
        <>
            <Options>
                <div className='bg-blue-500 opacity-80 p-2 rounded flex mx-1 items-center cursor-pointer hover transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:opacity-100 w-32 justify-center'>
                    <MdEdit size={20} className='text-white mr-2' />
                    <p className='text-white'>Edit</p>
                </div>
            </Options>
            <section className='mb-16'>
                <h2 className='my-5 font-semibold text-gray-500 text-xl uppercase'>Personal Information</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
                    <PersonalInfo label="username" value="eoffei" />
                    <PersonalInfo label="email" value="eoffei@gmail.com" />
                    <PersonalInfo label="first name" value="Ebenezer" />
                    <PersonalInfo label="lasst name" value="Offei" />
                </div>
                <h2 className='my-5 font-semibold text-gray-500 text-xl uppercase'>Notes Statistics</h2>
                <div
                    className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
                    <NotesStats label="Notes written" value={0} icon={<MdEdit className='flex-none text-white' size={30} />} />
                    <NotesStats label="Favorites" value={0} icon={<MdStar className='flex-none text-white' size={30} />} />
                </div>
            </section>
        </>
    );
}

export default Profile;