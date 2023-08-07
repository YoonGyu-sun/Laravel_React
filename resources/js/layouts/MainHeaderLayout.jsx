import React from 'react';
import Search from '../components/Search';
import MainheaderText from '../components/MainHeaderText';


const MainHeaderLayout = () => {
    return (
      <div className='h-64 bg-cover bg-center w-full ' style={{ backgroundImage: 'url(images/ip.png)' }}>
    <Search/>
    <div>
        <MainheaderText/>
    </div>
</div>
  );
}

export default MainHeaderLayout;
