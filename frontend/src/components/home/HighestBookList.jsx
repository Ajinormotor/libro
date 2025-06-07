import React from 'react'
import Slider from "react-slick";
import { booksData } from '../../data/bookData';
import { Link } from 'react-router-dom';

const HighestBookList = () => {
var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1074,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 760,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

  return (
    <div className='flex flex-col gap-10  p-2 md:p-5'>
        <div className='flex items-center justify-between'>
            <h1 className="md:text-3xl font-bold">Best selling books</h1>

            <Link className=''>
            <h1 className='md:text-base text-sm text-[#00AB6B]'>View all</h1></Link>

        </div>

        <Slider {...settings} className='overflow-hidden border-none'>
            {
                booksData.map((book,index) => (
                    <div key={index} 
       className='flex flex-col md:max-w-[300px] border-none'>
       <img src={book.image} alt='' loading='lazy'
       className='max-w-full w-full rounded-lg h-[250px] border-none'  />

       <div className='flex flex-col pl-5 gap-1 border-none'>

<h1 className="text-black text-xl font-bold">{book.title}</h1>
<p className="text-[#4B5563] text-base">{book.author}</p>

<ul className='flex items-center gap-1'>
    <li> <i className="ri-star-fill text-yellow-500"></i> </li>
           <li> <i className="ri-star-fill text-yellow-500"></i> </li>
           <li> <i className="ri-star-fill text-yellow-500"></i> </li>
            <li> <i className="ri-star-fill text-yellow-500"></i> </li>
                <li> <i className="ri-star-fill text-yellow-500"></i> </li>
</ul>

<div className='flex items-center gap-2'>
    <p className="text-[#00AB6B] text-base">${book.price}</p>
    <span className="line-through text-[#9CA3AF] text-base">${book.discountedPrice}</span>
</div>
</div>


                    </div>
                ))

            }
        </Slider>

    </div>
  )
}

export default HighestBookList