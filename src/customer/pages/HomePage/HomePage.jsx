import React from 'react'
import "./HomePage.css"
import MultipleItemCarousel from './MultipleItemCarousel'
const HomePage = () => {
    return (
        <div>
            <section className='-z-50 banner relative flex flex-col justify-center items-center'>
                <div className='w-[50vw] z-10 text-center'>
                    <p className='text-2x1 lg:text-7xl font-bold z-10 py-5'>Khana Hai</p>
                    <p className='z-10 text-gray-300-x1 lg:text-4xl'>Satisfy Your Hunger Anywhere Anytime</p>
                </div>
                <div className="cover absolute top-0 left-0 right-0"></div>
                <div className="fadout"></div>
            </section>
            <section className='p-10 lg:py-10 lg:px-20'>
                <div className=''>
                    <p className='text-2x1 font-semibold text-gray-400 py-3 pb-10'>Most Ordered</p>

                </div>
                <MultipleItemCarousel/>

            </section>

        </div>
    )
}

export default HomePage
