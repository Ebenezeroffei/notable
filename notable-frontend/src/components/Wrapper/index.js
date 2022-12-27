import React from 'react';
import Navbar from '../Navbar'
import Header from './Header';

const Wrapper = () => {
    return (
        <>
            <section className='fixed w-60 h-full bg-white border-r left-0 top-0'>
                <Navbar />
            </section>
            <main className='flex'>
                <section className='flex-none w-60 bg-white'>
                </section>
                <section className='w-full relative'>
                    <Header />
                    <h1 className="text-6xl m-2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque minima modi nesciunt nemo ipsa commodi incidunt iste cumque aliquid debitis autem veniam officiis quo atque, explicabo earum, provident ratione doloremque!
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, sed quis praesentium cupiditate animi vero, aliquam ex iste commodi, similique debitis deleniti. Quasi quis omnis libero modi inventore quidem ducimus!
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem, ipsum totam alias similique nesciunt quam perferendis sed eveniet labore exercitationem, a sapiente praesentium sint excepturi distinctio ea corporis. Consequuntur, facere!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, rerum ducimus! Quod voluptatem, quam voluptas soluta unde eum ut dignissimos neque eius architecto voluptates dolor alias error sit facere illum.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur harum sed ducimus optio eius voluptate quos dignissimos recusandae et, asperiores molestias exercitationem ex, repudiandae numquam saepe. Deleniti, suscipit quam!
                    </h1>
                </section>
            </main>
        </>
    );
}

export default Wrapper;