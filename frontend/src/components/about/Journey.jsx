import React from 'react'
import journeyImg from '../../assets/about (5).webp'

const Journey = () => {
  return (
    <div className='flex flex-col md:flex-row p-3
     items-center justify-center gap-10 min-h-[400px] w-full '>

        <div className='max-w-[500px] w-full'>
            <img src={journeyImg} alt='' loading='lazy'
            className='w-full h-full md:h-[307px] rounded-lg' />
        </div>

        <div className='flex flex-col gap-5 max-w-[600px] w-full'>
            <h1 className='text-3xl font-bold text-black'>
                Your Literary Journey Begins Here</h1>

                <p className='text-base text-[#4B5563]'>
                    Welcome to Bokifa, your premier destination for literary 
                    excellence. Since our founding, we've been dedicated to bringing the finest collection
                     of books to our cherished readers. Our carefully curated selection spans across genres, 
                    ensuring there's something for every book lover.</p>

                     <p className='text-base text-[#4B5563]'>
                        We believe in the power of stories to inspire, educate, and transform lives.
                         Our team of passionate bibliophiles works tirelessly to create an exceptional
                         book-buying experience for our community of readers.
                    </p>
        </div>

    </div>
  )
}

export default Journey