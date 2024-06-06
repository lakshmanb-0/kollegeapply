'use client'
import React, { useState } from 'react'
import NewsItem from '../BigStories/NewsItem'

const News = () => {
    const [active, setActive] = useState('All News')
    const links = ['All News', 'College News', 'Exam News', 'Admission 2024']
    return (
        <section className='bg-[#F6F3FF] py-10 '>
            <div className='max-width'>
                <ul className='bg-white text-[#464646] flex gap-8 px-7 rounded-xl shadow-sm w-fit mx-auto font-semibold'>
                    {links.map(link =>
                        <li
                            key={link}
                            onClick={() => setActive(link)}
                            className={`py-5 cursor-pointer hover:text-linkColor ${active === link && 'text-linkColor border-linkColor'} border-b-2 border-transparent hover:border-linkColor`}
                        >
                            {link}
                        </li>)}
                </ul>
                <div className='grid grid-cols-4 gap-4 py-10'>
                    {['1', '2', '3', '4', '5'].map(i => <NewsItem
                        type='newsBox'
                        key={i}
                        image={'https://images.pexels.com/photos/25396259/pexels-photo-25396259/free-photo-of-a-silver-tray-with-knives-and-forks-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        title={'What is the latest program that you are offering in your institute...'}
                        content={'Lucknow Public College of Professional Studies...'}
                        time={'27 Dec 2020'} />)}
                </div>
            </div>

        </section>
    )
}

export default News