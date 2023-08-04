import React from 'react';
import { createRoot } from 'react-dom/client'; // 수정된 부분
function Search (){

    const SearchSVG = (
        <svg
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /> </svg>
      );

    return(
        <div className='pl-5 pt-4'>
            <form className="flex w-14 h-12">
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="rounded-l-full border-t border-b border-l border-r-0 border-black border-4 px-4 focus:outline-none"
              />
              <button
                type="submit"
                className=" rounded-r-full border-t border-b border-r border-l-0 border-black border-4 px-4 bg-white"
              >
               {SearchSVG}
              </button>
            </form>
            
        </div>
    )
}
export default Search;