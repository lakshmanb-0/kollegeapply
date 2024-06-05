import React from 'react'
import NewsItem from '../BigStories/NewsItem'

const News = () => {
    return (
        <section>
            <ul>
                <li>All News</li>
                <li>College News</li>
                <li>Exam News</li>
                <li>Admission 2024</li>
            </ul>
            <div>
                {['1', '2', '3', '4', '5'].map(i => <NewsItem type='newsBox' key={i} title={i} content={i} time={i} />)}
            </div>
        </section>
    )
}

export default News