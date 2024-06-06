import React from 'react'

type Props = {
    title: string,
    content: string,
    time: string,
    image: string
}
const Article = ({ title, content, time, image }: Props) => {
    return (
        <section className='col-span-2 bg-white shadow-xl rounded h-fit'>
            <img src={image} alt="" />
            <div className='p-6 text-[#02234D]'>
                <h1 className='font-bold  text-4xl max-w-[700px]'>{title}</h1>
                <p className='text-[#8F81CE] py-4'>{time}</p>
                <p className='whitespace-pre-wrap'>{content + '...'} <a href="/news/1" className='text-linkColor uppercase font-bold'>Read</a></p>
            </div>
        </section>
    )
}

export default Article