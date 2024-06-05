import React from 'react'
import NewsItem from './NewsItem'

const BigStories = ({ title }: { title: string }) => {
    return (
        <div>
            <h1>{title}</h1>
            {['1', '2', '3', '4', '5'].map(i => <NewsItem type='none' key={i} title={i} content={i} time={i} />)}
        </div>
    )
}

export default BigStories