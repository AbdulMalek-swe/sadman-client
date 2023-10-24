import Layout from '@/components/customLayout/Layout';
import React from 'react';

const Home = () => {
    return (
        <Layout>
            <div className='flex justify-center flex-col items-center h-screen'>
                <div className='w-1/2'>
                    <input className='w-full border rounded-md text-gray-500 shadow-md py-4 px-2' placeholder='enter certificate number ' />
                </div>
                <h1 className='text-xl text-gray-500'>searc serticacet by id</h1>
            </div>
        </Layout>
    );
};

export default Home;