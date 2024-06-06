import React from 'react'
import NewsItem from './NewsItem'

const BigStories = ({ title }: { title: string }) => {
    return (
        <div className='bg-white shadow-sm p-4 px-5' style={{ marginTop: title == 'News' ? '40px' : '0px' }}>
            <h1 className='text-linkColor text-3xl font-bold uppercase pb-3'>{title}</h1>
            <div className='space-y-4'>
                {['1', '2', '3', '4'].map(i =>
                    <NewsItem
                        type='none'
                        key={i}
                        image={'https://images.pexels.com/photos/25396259/pexels-photo-25396259/free-photo-of-a-silver-tray-with-knives-and-forks-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        title={'What is the latest program that you are offering in your institute...'}
                        content={'Lucknow Public College of Professional Studies...'}
                        time={'27 Dec 2020'} />)}
            </div>
        </div>
    )
}

export default BigStories