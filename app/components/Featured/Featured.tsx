import React from 'react'
import NewsItem from '../BigStories/NewsItem'

const Featured = () => {
    return (
        <div>
            <h1>Featured</h1>
            <div>
                {['1', '2', '3', '4', '5'].map(i =>
                    <NewsItem type='featured' key={i} title={i} content={i} time={i} />)}
            </div>
        </div>
    )
}

export default Featured