import Article from '@/app/components/Article/Article'
import BigStories from '@/app/components/BigStories/BigStories'
import React from 'react'

const page = () => {
    let colors = ['DDC3FF', 'C3D7FF', 'FFEEC3']
    return (
        <main className='max-width'>
            <p>badge</p>
            <div className='grid grid-cols-3 gap-10'>
                <Article
                    image="https://img.freepik.com/free-photo/sports-car-races-through-dark-blurred-motion-generative-ai_188544-12490.jpg?t=st=1717138167~exp=1717141767~hmac=d7d68576586409d820641234a0ed9f48d4e824c5946913d1687aef07db83ae23&w=1380"
                    title="Chitkara University MBA Admission Open; Check Direct List..."
                    time="20 Sep 2023, 8:00pm"
                    content={`New Delhi: The State Common Entrance Test Cell, Government of Maharashtra, has issued the admit cards for the MArch, MHMCT, BEd, MEd, and MPEd Courses on February 27, 2024. To download the document
                    \nWe offer a diverse range of extracurricular activities aimed at enhancing personal growth, skill development, and building lasting connections. From cultural events to sports, competitions, and workshops, students have ample opportunities to refine their communication and critical thinking abilities while pursuing their passions.
                    \nAs individuals with dual responsibilities towards the institute and its students, our primary objective is to cultivate an enriching learning environment. We contribute to the institute by delivering high-quality education, aligning with institutional goals, and promoting a positive academic atmosphere. Towards students, we act as facilitators of learning, providing support, mentorship, and guidance for their intellectual, social, and emotional growth.
                    \nGraduates from our institute, particularly those in nursing, have a wide array of career opportunities. With essential clinical skills, specialization options, and global practice opportunities, they are well-equipped for rewarding careers dedicated to improving health and well-being while making a meaningful impact on communities worldwide.
                    \nThe paramount strength of our institute lies in its ability to provide a transformative educational experience. With robust academic programs, committed faculty, and abundant resources, we empower students to cultivate critical thinking, broaden their knowledge, and become well-rounded, educated citizens prepared to make significant contributions to society.
                    \nTo the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.
                    \nTo the youth and aspiring students, I encourage adopting a growth mindset, setting clear goals, and mastering effective time management. Nurture curiosity, seek mentorship, and prioritize well-being while remaining adaptable in a rapidly evolving world. Remember, success is a continuous journey—embrace the process, seize opportunities, and never stop learning.`}
                />
                <div>
                    <div className='flex flex-col gap-4'>
                        <button className='bg-[#40347C] text-white px-4 py-2 rounded-md'>Apply Now</button>
                        <button className='bg-gradient-to-r from-white to-[#F1EEFE] text-[#40347C] px-4 py-2 rounded-md border-[1px] border-[#D3CCF5]'>Download</button>
                        {[colors.map(i =>
                            <div
                                style={{ backgroundColor: `#${i}` }}
                                className=' text-white px-4 py-10 rounded-md text-center'
                            >ADVERTISEMENT BANNER
                            </div>)]}
                    </div>
                    <BigStories title='News' />
                </div>

            </div>

        </main>
    )
}

export default page