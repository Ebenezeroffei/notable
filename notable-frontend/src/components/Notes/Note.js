import React from 'react';
import { MdStar, MdStarOutline } from 'react-icons/md';

const Note = () => {
    return (
        <section className='border rounded p-3 shadow hover:shadow-lg cursor-pointer group hover:bg-indigo-50 transition-all duration-200 hover:scale-95'>
            <h3 className='text-indigo-500 font-semibold text-xl truncate'>Title </h3>
            <p className='text-gray-500 group-hover:text-gray-700 line-clamp overflow-hidden h-[75px] transition-all duration-200'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo vitae id est ipsa, illum tenetur officia dolor reiciendis voluptate maiores quibusdam minima ducimus ad maxime nisi nemo numquam aperiam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime laboriosam sequi nisi laborum possimus eligendi! Iste inventore dicta voluptas totam, laudantium doloribus et consequatur iusto quisquam quas consectetur eos quibusdam.
            </p>
            <div className='flex flex-wrap mt-2 justify-between'>
                <p className='text-xs text-gray-600 bg-indigo-100 p-2 rounded font-semibold group-hover:bg-indigo-200 transition-all duration-200 shadow'>Written By
                    <span className='text-indigo-500'> eoffei</span>
                </p>
                {
                    // TODO: Favorite
                    false
                        ? <p className='text-xs text-gray-600 bg-indigo-100 p-2 rounded font-semibold group-hover:bg-indigo-200 transition-all duration-200 shadow flex items-center'> <MdStar size={15} className="mr-1 text-indigo-500" /> Favorite
                        </p>
                        : <p className='text-xs text-gray-600 bg-indigo-100 p-2 rounded font-semibold group-hover:bg-indigo-200 transition-all duration-200 shadow flex items-center'> <MdStarOutline size={15} className="mr-1 text-indigo-500" /> Add To Favorite
                        </p>
                }
            </div>
        </section>
    );
}

export default Note;