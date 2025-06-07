import React, { useState } from 'react'

const Faq = () => {

    const [showFaq, setShowFaq] = useState(null)
const handleFaq = (id) => {
    setShowFaq(id)
}

  return (
       <div className=' min-h-[400px] flex flex-col items-center justify-center
     md:gap-10 gap-4 p-3 py-5'>

        <h1 className='text-3xl font-bold text-black'> Frequently Asked Questions</h1>

        <div className=' flex flex-col gap-2'>

            {
                faqData.map((faq,index) => (
                    <div  key={index}
                     className='flex flex-col max-w-[1100px] w-full border-[1px] border-[#E5E7EB] rounded-lg
                     '>

                        <div className='flex items-center justify-between px-2 pt-2 max-w-full'>
                            <h1 className='text-black font-semibold'>{faq.title}</h1>

<div onClick={() => handleFaq(index)}
className=''>

    {showFaq === index? 
     <i     className="ri-arrow-down-s-line text-black cursor-pointer"></i>  :  <i    className="ri-arrow-up-s-line text-black cursor-pointer"></i>
    }

</div>
                   
                        </div>

                        <div className={` overflow-hidden  p-2
                            ${showFaq === index ? "min-h-[40px]" : "h-0 opacity-0"}`} >
                            <p className='text-[#4B5563] text-base'>{faq.question}</p>
                            </div>


                    </div>
                ))
            }

        </div>

     </div>
  )
}

export default Faq





const faqData = [
  {
    title: "How do I place an order?",
    question: "Simply browse our collection, add items to your cart, and proceed to checkout. You can pay using various payment methods.",
  },
  {
    title: "What payment methods do you accept?",
    question: "We accept all major credit cards, PayPal, and bank transfers for your convenience.",
  },
  {
    title: "Do you ship internationally?",
    question: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location.",
  },
  {
    title: "What is your return policy?",
    question: "We offer a 30-day return policy for books in original condition. Contact our customer service for details.",
  },
];
