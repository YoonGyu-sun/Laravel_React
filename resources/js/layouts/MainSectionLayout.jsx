import React from 'react';
import MainSideLayout from './MainSideLayout';

const MainSectionLayout = () => {
    return (
        <div className='flex justify-center'>
            <div className='h-screen bg-white w-5/6 relative'>
                
                
                <div className='absolute top-0 right-0'>
                    <MainSideLayout/>
                </div>
            </div>
        </div>
  );
}

export default MainSectionLayout;
