import React from 'react';
import MainHeaderLayout from './MainHeaderLayout';
import MainSectionLayout from './MainSectionLayout';
import Navigationlayout from './NavigationLayout';
import MainSideLayout from './MainSideLayout';

const MainLayout = () => {
    return (
        <>
            <div className=''>
                <Navigationlayout/>
                <MainHeaderLayout/>
            </div>
            
            <div className='h-screen w-full bg-gray-100'>
                <MainSectionLayout/>
                
            </div>
        </>
    );
}

export default MainLayout;
