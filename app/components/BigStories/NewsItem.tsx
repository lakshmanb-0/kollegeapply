import moment from 'moment';
import Image from 'next/image';
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
        <section className={`flex ${type == 'newsBox' ? 'flex-col bg-white p-3 rounded' : 'flex-row py-3 sm:py-6'} gap-4 items-center  my-auto`}>
            <Image
                src={image}
                alt="newsItem"
                className={`${type == 'featured' ? 'hidden' : type == 'newsBox' ? 'block' : 'size-32'} aspect-square object-cover `}
                width={1920}
                height={1080}
            />
            <div className={`text-sm ${type == 'featured' ? 'max-w-[300px]' : ''}`}>
                <h1 className='text-[#1A1A1A] font-semibold line-clamp-2'>{title}</h1>
                <p className='text-[#090920]/90 py-1 sm:py-2'>{content}</p>
                <p className='text-[#B4B7C1] flex items-center gap-1'><MdAccessTime />{moment(time).format('DD MMM, YYYY')}</p>
            </div>
        </section>
    )
}

export default NewsItem