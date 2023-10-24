import React from 'react';

const Wings = () => {
    return (
        <div className='container mx-auto mt-4'>
            <h1 className='text-center  py-3 px-2 text-2xl my-5'>wings</h1>
            <div className='grid grid-cols-4 gap-x-10  justify-center place-content-center my-5'>
                {
                    [1, 2, 3, 4].map((item, index) => <div className='shadow-md flex flex-col items-center justify-center  ' key={index}>

                        <img src='/stte.jpg' alt='loading' className='w-32 h-32 rounded-full ' />
                        <h1 className='my-5 text-black font-bold text-2xl'>this is wings field {item}</h1>
                        <p className='mb-5 px-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et libero, praesentium quia nam dolorem ab animi quo ipsum voluptatibus, aut quaerat accusantium saepe earum? Sapiente sequi eius pariatur? Non, veniam?</p>
                        <button className='bg-blue-700 rounded-md text-white mb-5 py-2 px-1 '>submit button back</button>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Wings;