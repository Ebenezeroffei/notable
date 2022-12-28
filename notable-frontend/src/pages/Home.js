import React from 'react';
import { MdAdd } from 'react-icons/md';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';
import Notes from '../components/Notes';
import Options from '../components/Wrapper/Options';

const Home = () => {
    const navigate = useNavigate();


    return (
        <>
            <Options>
                <div className='bg-indigo-500 opacity-60 p-2 rounded flex mx-1 items-center cursor-pointer hover transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:opacity-100'>
                    <MdAdd size={20} className='text-white mr-2' />
                    <p className='text-white'>Add Note</p>
                </div>
            </Options>
            <section>
                {/* <div className='text-center'>
                    <h2 className='text-center mt-10 text-2xl text-gray-500 mb-3'>No notes have been added yet.</h2>
                    <Button isLoading={false} onClickHandler={() => navigate('/login')} text="Add Note" width="w-1/2" />
                </div> */}
                <Notes />
            </section>
        </>
    );
}

export default Home;