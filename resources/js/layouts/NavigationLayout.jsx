import React from 'react';

const Navigationlayout = () => {
    const MenuSVG = (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      );

      const activeOption = () => alert('hi');
    
    return (
        <nav className="my-5 pl-6 flex items-center bg-white h-7">
            <div className='flex'>
                <div className='pr-32 text-xl font-black'><a href="#">joy_</a></div>
                <div className='px-4'><a href="#">코드</a></div>
                <div className='px-4'><a href="#">코드</a></div>
                <div className='px-4'><a href="#">코드</a></div>
                <div className='px-4'><a href="#">코드</a></div>
            </div>
             {/* if문 사용하기 auth */}
             <div className='flex-auto flex justify-end items-center pr-8'>
                <div className="mr-4 pr-2"><a href="#">로그인</a></div>
                <div className="mr-4 pr-6"><a href="#">회원가입</a></div>
                <button onClick={activeOption}>{MenuSVG}</button>
            </div>
        </nav>
  );
}
export default Navigationlayout;

