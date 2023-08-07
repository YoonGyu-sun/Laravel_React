import React from 'react';

function MainheaderText (){

    const SearchSVG = (
        <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>
      );

    return(
    <div className='flex justify-center'>
            <div className='w-3/5 border-b pb-12 border-gray-300'>
                <div className='text-center pt-6 text-6xl'>
                    log safeg
                </div>
            </div>
        </div>
    )
}
export default MainheaderText;