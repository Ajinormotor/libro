import { useBookStore } from '@/store/bookStore';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { toast } from 'react-toastify';


const bookStat = [

    {title: 'Pages' , value: '384'  },
    {title: 'Published' , value: '2025'  },
     {title: 'Language' , value: 'English'  },
    {title: 'Publisher' , value: 'Bokifa Publishing'  },

  ]
 

const BookDetails = () => {
  const { id } = useParams();
  const { fetchSingleBook, bookDetails } = useBookStore();

  useEffect(() => {
    const getBook = async () => {
      const { success } = await fetchSingleBook(id);
      if (success) {
        console.log("success is true");
      } 
      else {
        console.log("Success is false")
      }
    };

    getBook();
  }, [id, fetchSingleBook]); 

   console.log("Books details", bookDetails);

 

  if (!bookDetails) return <p>Loading book details...</p>;
  

  return (
    <div className='min-h-[250px] flex flex-col md:flex-row justify-center 
    p-2 m"p-5 gap-3 w-full'>


 {/* Book image */}
        <div className='flex max-w-[500px] w-full '>
            <div className='flex flex-col gap-5'>
        <img src={bookDetails?.image} alt='' loading='lazy'
   className='rounded-lg h-full md:h-[70%] md:w-[500px]' />

         <Link
      className='bg-[#00AB6B]  w-full rounded-lg text-white h-[46px] flex
       items-center justify-center text-base cursor-pointer'>
Buy Book
   </Link>
            </div>
        </div>

{/* Book details */}
        <div className=' w-full md:px-4'>

            <div className='flex flex-col gap-1 '>

  <h1 className='font-bold text-3xl'>{bookDetails?.bookName}</h1>

<div className='flex items-center gap-5'>

    
  <p className='text-[#4B5563] text-base'>By: {bookDetails?.authorName}</p>

    <ul className='flex items-center gap-1'>
        <li><i className="ri-star-fill text-yellow-400"></i></li>
      <li><i className="ri-star-fill text-yellow-400"></i></li>
       <li><i className="ri-star-fill text-yellow-400"></i></li>
    <li><i className="ri-star-fill text-yellow-400"></i></li>
  <li><i className="ri-star-half-fill text-yellow-400"></i></li>
    </ul>

    </div>

<div className='flex items-center gap-1'>
    <p className='text-[#00B67A] text-3xl font-bold'>{bookDetails?.price}</p>

        <p className='text-[#9CA3AF] text-base font-bold line-through opacity-50'>
            {bookDetails?.price}
            </p>
</div>


  </div>

  <div className='bg-[#3F9FAFB] rounded-lg p-5 w-full'>
            {
                bookStat.map((b,index) => (
                    <div key={index}
                className='flex items-center justify-start w-full border-b-[1px] border-[#E5E7EB]
                 h-[48px] md:gap-20'>
          <h1 className='text-[#4B5563] text-base '>{b.title}</h1>
          <h1 className='text-black text-base'>{b.value}</h1>

                    </div>
                 ))
            }
            
        </div>



<div className='flex flex-col gap-4 w-full'>


        <p className='text-[#4B5563] text-base'>{bookDetails?.summary?.slice(0,200)}</p>

           <p className='text-[#4B5563] text-base'>{bookDetails?.summary?.slice(2000,400)}</p>

              <p className='text-[#4B5563] text-base'>{bookDetails?.summary?.slice(400,600)}</p>
              </div>

        </div>

        

    
  
    </div>
  );
};

export default BookDetails;
