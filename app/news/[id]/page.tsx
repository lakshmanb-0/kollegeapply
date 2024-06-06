import Article from '@/app/components/Article/Article'
import BigStories from '@/app/components/BigStories/BigStories'
import { getData } from '@/app/server action/api';
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const page = async () => {
    let colors = ['DDC3FF', 'C3D7FF', 'FFEEC3']
    const data = await getData()

    return (
        <main className='max-width px-4'>
            <div className='flex items-center gap-1 py-5'>
                <a href="/" className='text-[#A7B2C0]'>News Listing Page</a>
                <IoIosArrowForward fill='#A7B2C0' />
                <p className='text-linkColor'>Individual News</p>
            </div>
            <div className='grid lg:grid-cols-3 gap-10'>
                <Article />
                <div>
                    <div className='flex flex-col gap-4'>
                        <button className='bg-[#40347C] text-white px-4 py-2 rounded-md'>Apply Now</button>
                        <button className='bg-gradient-to-r from-white to-[#F1EEFE] text-[#40347C] px-4 py-2 rounded-md border-[1px] border-[#D3CCF5]'>Download</button>
                        {[colors.map(i =>
                            <div
                                key={i}
                                style={{ backgroundColor: `#${i}` }}
                                className=' text-white px-4 py-10 rounded-md text-center'
                            >ADVERTISEMENT BANNER
                            </div>)]}
                    </div>
                    <BigStories title='News' data={data.results} />
                </div>

            </div>

        </main>
    )
}

export default page