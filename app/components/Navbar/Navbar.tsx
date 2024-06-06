'use client'
import React from 'react'
import Search from './Search'
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    return (
        <nav className='px-4 py-5 shadow-lg bg-white'>
            <div className='flex items-center gap-10 justify-between max-width'>
                <img src="/logoIcon.svg" alt="w-full h-full" className='' onClick={() => window.location.href = '/'} />
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
        </nav>
    )
}

export default Navbar

const DropList = [
    'University',
    'Colleges',
    'Exams',
    'Courses',
    'News',]