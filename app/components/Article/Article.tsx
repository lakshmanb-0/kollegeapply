'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Article = () => {
    const pathName = usePathname()

    const [title, time, content] = [
        "Chitkara University MBA Admission Open; Check Direct List...",
        "20 Sep 2023, 8:00pm",
        `New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024. To download the document
        \nWe offer a diverse range of extracurricular activities aimed at enhancing personal growth, skill development, and building lasting connections. From cultural events to sports, competitions, and workshops, students have ample opportunities to refine their communication and critical thinking abilities while pursuing their passions.
        \nAs individuals with dual responsibilities towards the institute and its students, our primary objective is to cultivate an enriching learning environment. We contribute to the institute by delivering high-quality education, aligning with institutional goals, and promoting a positive academic atmosphere. Towards students, we act as facilitators of learning, providing support, mentorship, and guidance for their intellectual, social, and emotional growth.
        \nGraduates from our institute, particularly those in nursing, have a wide array of career opportunities. With essential clinical skills, specialization options, and global practice opportunities, they are well-equipped for rewarding careers dedicated to improving health and well-being while making a meaningful impact on communities worldwide.
        \nThe paramount strength of our institute lies in its ability to provide a transformative educational experience. With robust academic programs, committed faculty, and abundant resources, we empower students to cultivate critical thinking, broaden their knowledge, and become well-rounded, educated citizens prepared to make significant contributions to society.
        \nTo the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.
        \nTo the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.`
    ]

    return (
        <section className='lg:col-span-2 bg-white shadow-lg rounded h-fit'>
            <Image
                src='/newsImage.png'
                alt="news picture"
                width={1920}
                height={1080}
            />
            <div className='p-4 sm:p-6 text-[#02234D]'>
                <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl max-w-[700px] line-clamp-2'>{title}</h1>
                <p className='text-[#8F81CE] py-2 sm:py-4'>{time}</p>
                <p className={`whitespace-pre-wrap ${pathName.includes('news') ? '' : 'line-clamp-2'}`}>{content + '...'}</p>
                {!!!pathName.includes('news') && <Link href="/news/1" className='text-linkColor uppercase font-bold underline'>Read More</Link>}
            </div>
        </section>
    )
}

export default Article