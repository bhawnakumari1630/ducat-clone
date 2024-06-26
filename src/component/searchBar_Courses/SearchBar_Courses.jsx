import React from 'react'
import { BiSearch } from 'react-icons/bi'

function SearchBar_Courses() {
  return (
    <div className='flex min-w-80 mx-auto md:mx-0 w-[90%] max-w-[500px] items-center font-normal rounded-md overflow-hidden hover:ring ring-blue-200 '>
        <input type="text" placeholder='search your favourite course today.' className='bg-sky-200/40 flex-1 py-4 px-3 placeholder:font-normal placeholder:text-zinc-500  outline-none  capitalize text-zinc-700 '/>
        <div className=' bg-sky-500 py-4 px-4 text-2xl text-white '>
          <BiSearch />
        </div>
    </div>
  )
}

export default SearchBar_Courses