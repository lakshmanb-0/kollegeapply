'use client'
import { getSearch } from '@/app/server action/api';
import React, { useEffect, useState } from 'react'
import { GoSearch } from "react-icons/go";

const Search = () => {
    const [input, setInput] = useState<string>('')
    const [data, setData] = useState([])

    // debounce function for search
    const debounce = (func: any, delay: number) => {
        let timeoutId: any
        const debounced = (...args: any) => {
            timeoutId = setTimeout(() => {
                func(...args)
            }, delay)
        }
        debounced.cancel = () => {
            clearTimeout(timeoutId)
        }
        return debounced
    }

    // fetch search results
    useEffect(() => {
        const fetchSearch = debounce(async () => {
            const data = await getSearch({ query: input })
            setData(data)
        }, 400)

        input.length > 0 && fetchSearch()

        return () => {
            fetchSearch.cancel()
        }
    }, [input])

    return (
        <div className='flex items-center gap-2'>
            <GoSearch size={20} />
            <div className='relative'>
                <input
                    type="text"
                    placeholder='Search for Universities'
                    className='outline-none bg-transparent w-[300px] p-2'
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
                <div className='absolute top-9 left-0 w-full bg-white rounded shadow-sm'>
                    {
                        (data.length > 0 && input.length > 0) && data.map((item: { name: string, country: string }, index) => index < 10 && (
                            <div key={index}>
                                <p className='text-sm p-2 hover:bg-[#8F81CE] hover:text-white'>{item.name}, {item.country}</p>
                            </div>
                        ))

                    }
                    {(data.length === 0 && input.length > 0) && <p className='text-sm p-2'>No results found</p>}


                </div>
            </div>
        </div>
    )
}

export default Search