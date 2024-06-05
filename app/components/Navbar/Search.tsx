'use client'
import React, { useState } from 'react'
import { GoSearch } from "react-icons/go";

const Search = () => {
    const [input, setInput] = useState<string>('')
    return (
        <div className='flex items-center gap-2'>
            <GoSearch size={20} />
            <input
                type="text"
                placeholder='Search for Colleges, Exams, Courses & more... '
                className='outline-none bg-transparent'
                value={input}
                onChange={e => setInput(e.target.value)}
            />
        </div>
    )
}

export default Search