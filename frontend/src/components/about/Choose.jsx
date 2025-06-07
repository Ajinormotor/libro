import React from 'react'
import extensive from "../../assets/about (4).webp"
import expert from "../../assets/about (3).webp"
import competitive from "../../assets/about (2).webp"

const Choose = () => {
  return (
    <div className='bg-[#F9FAFB] py-5 md:min-h-[400px] flex flex-col items-center justify-center p-3
     md:gap-10 gap-5'>

         <h1 className='text-3xl font-bold text-black'> Why Choose Us</h1>

         <div className='flex flex-col md:flex-row w-full items-center justify-center gap-4 md:gap-10'>
            {

                ChooseData.map((choose,index) => (
                    <div key={index}
 className='bg-white rounded-lg p-3 md:max-w-[352px] w-full h-[216px]
 flex flex-col items-start justify-center gap-2'>
                        <img src={choose.img} alt='' loading=''
                        className='w-12 h-12' />
                        <h1 className='font-semibold text-xl'>{choose.title}</h1>
                        <p className='text-[#4B5563] text-base w-[80%]'>{choose.desc}</p>
                        </div>
                ))
            }

            </div>

    </div>
  )
}

export default Choose



const ChooseData = [
    {
        title: "Extensive Collection",
        img: extensive,
        desc: "Access to over 9,000 carefully curated books across all genres"
    },

     {
        title: "Expert Curation",
        img: expert,
        desc: "Each book is hand-picked by our team of literary experts"
    },


     {
        title: "Competitive Prices",
        img: competitive,
        desc: "Best prices guaranteed with regular deals and discounts"
    },

    



]