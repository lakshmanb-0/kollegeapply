'use client'
import React, { useState } from 'react'
import Search from './Search'
import { IoIosArrowDown } from "react-icons/io";
import Link from 'next/link';
import Image from 'next/image';
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className='px-4 py-5 shadow-lg bg-white relative'>
            <div className='flex items-center gap-10 justify-between max-width relative'>
                <Link href="/">
                    <Image
                        src="/logoIcon.svg"
                        alt="logo"
                        width={150}
                        height={30}
                    />
                </Link>

                <HiMenuAlt3 size={30} className='lg:hidden' onClick={() => setOpen(!open)} />

                <div className={`items-center gap-4 justify-between bg-white top-12 right-0 lg:flex ${open ? 'absolute w-fit p-4 space-y-2 rounded shadow-sm' : 'hidden w-full'}`}>
                    <ul className='flex flex-col lg:flex-row gap-5'>
                        {
                            DropList.map(text =>
                                <li className='flex items-center gap-1' key={text}>
                                    <span>{text}</span>
                                    <IoIosArrowDown />
                                </li>
                            )
                        }
                    </ul>
                    <Search />
                </div>

            </div>
        </nav>
    )
}

export default Navbar

const DropList = ['University', 'Colleges', 'Exams', 'Courses', 'News',]