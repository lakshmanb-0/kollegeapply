import React from 'react'

type Props = {
    title: string,
    content: string,
    time: string,
    type: 'newsBox' | 'featured' | 'none'
}
const NewsItem = ({ title, content, time, type }: Props) => {
    return (
        <section className={`flex ${type == 'newsBox' ? 'flex-col' : 'flex-row'} gap-4 items-center`}>
            <img src="" alt="" className={`${type == 'featured' ? 'hidden' : ''}`} />
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
                <p>{time}</p>
            </div>
        </section>
    )
}

export default NewsItem