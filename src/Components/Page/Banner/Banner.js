import React from 'react';
import './Banner.css'

const Banner = () => {
   return (
      <div id="banner-img">
         <div className="container mx-auto">
            <div >
               <div id='banner-content'>
                  <div id="banner-text">
                     <h1 className='text-4xl font-medium'>Best Food waiting for your belly </h1>
                  </div>
                  <div className='py-10 text-center' id="banner-search-inpu">
                     <input className='p-2 w-4/6 rounded-md relative'  type="search"  placeholder='Foods Search Here'/>
                     <button id='searchBt' className='bg-rose-600 py-2 px-6 rounded-full '>Search</button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;