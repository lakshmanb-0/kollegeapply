import React from 'react'
import NewsItem from './NewsItem'
import { dataProps } from '../Featured/Featured'

const BigStories = ({ title, data }: { title: string, data: dataProps[] }) => {
    return (
        <div className='bg-white shadow-sm p-3 sm:p-4' style={{ marginTop: title == 'News' ? '40px' : '0px' }}>
            <h1 className='text-linkColor text-2xl sm:text-3xl font-bold uppercase pb-2 sm:pb-3'>{title}</h1>
            <div>
                {
                    data.map((el, index) =>
                        (title == 'News' ? index < 4 : index > 5) && <NewsItem
                            key={el.article_id}
                            type='none'
                            image={el.image_url}
                            title={el.title}
                            content={el.source_id}
                            time={el.pubDate}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default BigStories