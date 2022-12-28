import React, { useEffect } from 'react';
import Options from '../components/Wrapper/Options';
import { useNavStore } from '../utils/store';
import { MdEdit, MdDeleteForever } from 'react-icons/md';

const NoteDetail = () => {
    const navigateTo = useNavStore(state => state.navigateTo);

    useEffect(() => {
        navigateTo(0, "Title");
    }, [])

    return (
        <>
            <Options>
                <div className='bg-blue-500 opacity-80 p-2 rounded flex mx-1 items-center cursor-pointer hover transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:opacity-100 w-32 justify-center'>
                    <MdEdit size={20} className='text-white mr-2' />
                    <p className='text-white'>Edit</p>
                </div>
                <div className='bg-red-500 opacity-80 p-2 rounded flex mx-1 items-center cursor-pointer hover transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:opacity-100 w-32 justify-center'>
                    <MdDeleteForever size={20} className='text-white mr-2' />
                    <p className='text-white'>Delete</p>
                </div>
            </Options>
            <section>
                <p className='text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis odit incidunt doloremque delectus accusantium voluptate. Est pariatur, iure unde illo ad possimus expedita dicta laudantium impedit deserunt dignissimos ipsa?
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem cumque atque magnam accusamus minus. Provident harum odio repellendus iure placeat et veritatis dicta dolorum voluptas autem, fugit nam ullam nisi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur reiciendis incidunt odio, similique aliquid nulla, quisquam vitae sed ea suscipit sit molestias obcaecati expedita animi fuga? Eveniet suscipit accusamus quaerat?
                </p>
                <div className='mt-3 flex gap-2 flex-wrap'>
                    <p className='text-xs text-gray-600 bg-indigo-100 p-2 rounded font-semibold shadow'>Written By: <span className='text-indigo-500'>eoffei</span></p>
                    <p className='text-xs text-gray-600 bg-indigo-100 p-2 rounded font-semibold shadow'>Created On: <span className='text-indigo-500'>3rd December, 2022 4:56pm</span></p>
                    <p className='text-xs text-gray-600 bg-indigo-100 p-2 rounded font-semibold shadow'>Modified On: <span className='text-indigo-500'>3rd December, 2022 4:56pm</span></p>
                </div>
            </section>
        </>
    );
}

export default NoteDetail;