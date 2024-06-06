'use client'
import React, { useState } from 'react'
import NewsItem from '../BigStories/NewsItem'
import { dataProps } from '../Featured/Featured'

const News = ({ data }: { data: dataProps[] }) => {
    const [active, setActive] = useState('All News')
    const links = ['All News', 'College News', 'Exam News']

    return (
        <section className='bg-[#F6F3FF] py-10 '>
            <div className='max-width'>
                <ul className='bg-white text-[#464646] flex gap-8 px-7 rounded-xl shadow-sm w-fit mx-auto font-semibold'>
                    {
                        links.map(link =>
                            <li
                                key={link}
                                onClick={() => setActive(link)}
                                className={`py-5 cursor-pointer hover:text-linkColor border-b-2 ${active === link ? 'text-linkColor border-linkColor' : 'border-transparent'} hover:border-linkColor`}
                            >
                                {link}
                            </li>)
                    }
                </ul>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10'>
                    {
                        data.map(el =>
                            (el.title.includes(active.split(' ')[0]) || el.description.includes(active.split(' ')[0]) || active === 'All News') &&
                            <NewsItem
                                key={el.article_id}
                                type='newsBox'
                                image={el.image_url}
                                title={el.title}
                                content={el.source_id}
                                time={el.pubDate}
                            />
                        )
                    }
                </div>
            </div>

        </section>
    )
}

export default News