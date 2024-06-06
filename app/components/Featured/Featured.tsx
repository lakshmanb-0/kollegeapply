import React from 'react'
import NewsItem from '../BigStories/NewsItem'

export type dataProps = {
    article_id: string,
    description: string,
    image_url: string,
    title: string,
    pubDate: string,
    source_id: string,
}
const Featured = ({ data }: { data: dataProps[] }) => {
    return (
        <div className='bg-[#FFFDF9] border-[1px] border-[#E0AD4C] p-6 rounded mt-10 mx-3'>
            <h1 className='text-3xl font-bold text-[#E0AD4C]'>FEATURED NEWS</h1>
            <div className='flex justify-between flex-wrap'>
                {
                    data.map((el, index) =>
                        index < 4 && <NewsItem
                            key={el.article_id}
                            type='featured'
                            image={el.image_url}
                            title={el.title}
                            content={el.source_id}
                            time={el.pubDate}
                        />)
                }
            </div>
        </div>
    )
}

export default Featured