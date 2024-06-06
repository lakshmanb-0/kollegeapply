import React from 'react'
import { MdAccessTime } from "react-icons/md";

type Props = {
    title: string,
    content: string,
    time: string,
    type: 'newsBox' | 'featured' | 'none',
    image: string
}
const NewsItem = ({ title, content, time, type, image }: Props) => {
    return (
        <section className={`flex ${type == 'newsBox' ? 'flex-col bg-white p-3 rounded' : 'flex-row py-6'} gap-4 items-center  my-auto`}>
            <img src={image} alt="" className={`${type == 'featured' ? 'hidden' : type == 'newsBox' ? '' : 'size-32'} aspect-square object-cover `} />
            <div className={`text-sm ${type == 'featured' ? 'max-w-[300px]' : ''}`}>
                <h1 className='text-[#1A1A1A] font-semibold'>{title}</h1>
                <p className='text-[#090920]/90 py-1'>{content}</p>
                <p className='text-[#B4B7C1] flex items-center gap-1'><MdAccessTime />{time}</p>
            </div>
        </section>
    )
}

export default NewsItem