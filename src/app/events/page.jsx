import Layout from '@/components/customLayout/Layout';
import React from 'react';

const Home = () => {
    return (
        <Layout>
 <div className='container mx-auto  '>
           { [1,2,3].map((item,index)=><div className='flex gap-10 relative border my-4' key={index}>
                <div className='w-1/4'>
                    <img src='/tehe.jpg' className='w-full h-full' />
                </div>
                <div className='w-3/4'>
                    <h1 className='text-3xl text-blue-400 my-1'>thisidsf</h1>
                    <span className='text-lg'>1.2/3.34/34</span>
                    <p className='text-xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, officiis similique. Minima, debitis, quisquam ipsum pariatur accusamus aliquam delectus deserunt quidem perspiciatis explicabo earum ad dicta maxime! Necessitatibus, aspernatur ipsum?</p>
                </div>
                <span className='absolute right-4 top-1 bg-sky-400 px-2 py-1 rounded-md'>finsed</span>
            </div>)}
        </div>
        </Layout>
       
    );
};

export default Home;