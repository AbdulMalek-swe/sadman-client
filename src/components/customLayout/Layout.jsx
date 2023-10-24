import Link from 'next/link';
import React from 'react';
import { FaBeer } from 'react-icons/fa';
const Layout = ({children}) => {
    return (
        <div>
             <nav class="flex items-center justify-between p-4 bg-gray-800 text-white">

<div class="flex items-center">
  <div class="social-icon">zxczxc
    <i class="fab fa-facebook"></i>
  </div>
  <div class="social-icon">
    <i class="fab fa-twitter"></i>
  </div>
  <div class="social-icon">
    <i class="fab fa-instagram"></i>
  </div>
</div>


<div class="flex justify-center">
  <Link href="/" className="nav-link mx-2">Home</Link>

  <Link href="/certificate" className="nav-link mx-2">Certificate</Link>
  <Link href="/events" className="nav-link mx-2">Event</Link>
  <Link href="/login" className="nav-link mx-2">Login</Link>
  
</div>


<div>
  <img src="logo.png" alt="Logo" class="h-10 w-10" />
</div>
</nav>
            {children}
            <footer className='grid grid-cols-3 mt-20'>
                 <div className='flex flex-col justify-center items-center'>
                    <img src='/fvrsir.jpg' className='w-10 h-10'/>
                    <h1 className='text-2xl'>software neginering clucb</h1>
                 </div>
                 <div className='text-gray-500'>
                    <h1 className='text-3xl capitalize my-5'>
                        about diu pc
                    </h1>
                    <p className='text-gray-500 text-xl mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab, iste error? Dolor neque, veniam, eligendi numquam nisi laborum minima dolore suscipit consequatur sed aspernatur magni quo esse officiis eum provident.</p>
                    <p>copyright @c 200wklsdhflkds</p>
                 </div>
                 <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-center text-4xl text-gray-500'>
                        find us on
                    </h1>
                   <div className='flex space-x-3'>
                   <FaBeer /> <FaBeer /> <FaBeer /> <FaBeer />
                   </div>
                 </div>
             
            </footer>
        </div>
    );
};

export default Layout;