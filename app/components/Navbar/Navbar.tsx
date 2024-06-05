import React from 'react'
import Search from './Search'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='flex items-center gap-10 px-4 py-5 shadow-lg'>
            <img src="./logoIcon.svg" alt="w-full h-full" className='' />
            <div className='flex items-center gap-4 justify-between w-full'>
                <ul className='flex gap-5'>
                    {DropList.map(text =>
                        <li className='flex items-center gap-1' key={text}>
                            <span>{text}</span>
                            <IoIosArrowDown />
                        </li>
                    )}
                </ul>
                <Search />
            </div>

        </div>
    )
}

export default Navbar

const DropList = [
    'University',
    'Colleges',
    'Exams',
    'Courses',
    'News',]