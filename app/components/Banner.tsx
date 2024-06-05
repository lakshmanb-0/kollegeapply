import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Banner = () => {
    return (

        <div className="bg-[#F2EFFF] text-[#090909] flex items-center gap-4 text-xs p-4 w-fit rounded-xl mx-4">
            <p>
                <span className="font-bold">
                    ⚡ ️Trending Now:
                </span>
                {" CBSE Class 12 Physics Question Paper 2024 Set 3"}
            </p>
            <a href="" className="flex items-center gap-1 text-[#40347D] font-semibold">Check Now <FaArrowRightLong /></a>
        </div>
    )
}

export default Banner