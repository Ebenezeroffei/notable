import React from 'react';

const Note = () => {
    return (
        <section className='border rounded p-3 shadow hover:shadow-lg cursor-pointer group hover:bg-indigo-50 transition-all duration-200 hover:scale-95'>
            <h3 className='text-indigo-500 font-semibold text-xl truncate'>Title </h3>
            <p className='text-gray-500 group-hover:text-gray-700 line-clamp overflow-hidden h-[75px]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae illo vitae id est ipsa, illum tenetur officia dolor reiciendis voluptate maiores quibusdam minima ducimus ad maxime nisi nemo numquam aperiam.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime laboriosam sequi nisi laborum possimus eligendi! Iste inventore dicta voluptas totam, laudantium doloribus et consequatur iusto quisquam quas consectetur eos quibusdam.
            </p>
        </section>
    );
}

export default Note;