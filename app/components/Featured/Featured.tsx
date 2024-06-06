import React from 'react'
import NewsItem from '../BigStories/NewsItem'

const Featured = () => {
    return (
        <div className='bg-[#FFFDF9] border-[1px] border-[#E0AD4C] p-6 rounded my-10'>
            <h1 className='text-3xl font-bold text-[#E0AD4C]'>FEATURED NEWS</h1>
            <div className='flex justify-between flex-wrap'>
                {['1', '2', '3', '4'].map(i =>
                    <NewsItem
                        key={i}
                        type='featured'
                        image={'https://images.pexels.com/photos/25396259/pexels-photo-25396259/free-photo-of-a-silver-tray-with-knives-and-forks-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
                        title={'What is the latest program that you are offering in your institute...'}
                        content={'Lucknow Public College of Professional Studies...'}
                        time={'27 Dec 2020'}
                    />)}
            </div>
        </div>
    )
}

export default Featured