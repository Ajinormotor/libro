import React, { useState } from 'react'
import image_previewer from "../../../../assets/image__previewer.webp"
import SubmitButton from '@/resuseable/SubmitButton'
import InputField from '@/resuseable/InputField'
import { useBookStore } from '@/store/bookStore'
import { toast } from 'react-toastify'

const Create = ({ setShowCreate }) => {
  
  const [bookName, setBookName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [status, setStatus] = useState('')
  // const [category, setCategory] = useState('')
    const [price, setPrice] = useState('')
      const [discountPrice, setDiscountPrice] = useState('')
  const [image, setImage] = useState(null)

  const handleImage = (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader(); 

    reader.onloadend = function () { 
      setImage(reader.result); 
    };

    reader.readAsDataURL(file);
  }
};


  const handleRevert = () => {
    setImage(null)
  }
  const {createBook} = useBookStore()

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const {message,success} = await createBook({
       image, bookName,authorName,price,discountPrice, status,
      })

      if(success){
        toast.success(message)
        setBookName(''),
        setAuthorName(''),
        setDiscountPrice(''),
        setPrice(''),
        setStatus('')
        setShowCreate(false)
      } else {
        toast.error(message)
      }
      
    } catch (error) {
      toast.error(error.message )
      
    }
  }

  return (
    <div className='w-full flex items-center justify-center overflow-hidden'>
      <div className='max-w-[700px] md:max-h-[450px] flex flex-col gap-4 w-full overflow-y-scroll bg-white rounded-lg p-4'>
        <div className='flex items-center justify-between'>
          <h1 className='font-bold text-3xl text-[#111827]'>Add new Book</h1>
          <i onClick={() => setShowCreate(false)} className="ri-close-line text-[#6B7280] text-2xl cursor-pointer"></i>
        </div>

        <div className='flex flex-col'>
          <form onSubmit={handleSubmit}
           className='flex flex-col gap-2'>

            <div className='border-[2px] border-[#E5E7EB] flex flex-col items-center 
            justify-center h-[184px] rounded-lg'>

                <div className='relative'>

             
              <label htmlFor='image'>
                <img
                  src={image || image_previewer}
                  alt='Preview'
                  className='w-20 h-20 cursor-pointer object-cover'
                />
              </label>

              {image &&
                <div
                  onClick={handleRevert}
                  className='bg-white rounded-full w-[25px] h-[25px] flex items-center 
                  justify-center absolute -top-2 right-0 cursor-pointer shadow'>
                  <i className="ri-reset-left-fill text-sm"></i>
                </div>
              }
                 </div>

              <input
                id='image'
                type='file'
                className='hidden'
                onChange={handleImage}
                accept="image/png, image/jpeg"
              />

              <h1 className='text-base text-[#4B5563]'>Click to upload or drag and drop</h1>
              <p className='text-[#6B7280] text-sm'>PNG, JPG up to 2MB</p>
            </div>

            <div className='w-full'>
              <InputField
                name="Book Name"
                placeholder="Enter book name"
                type="text"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
                label="Book Name"
              />
            </div>

            <div className='w-full'>
              <InputField
                name="Author Name"
                placeholder="Enter author name"
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                label="Author Name"
              />
            </div>

        <div className='w-full'>
              <InputField
                name="Price"
                placeholder="Price"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                label="Price"
              />
            </div>

                <div className='w-full'>
              <InputField
                name="Discount Price"
                placeholder="Discount Price"
                type="text"
                value={discountPrice}
                onChange={(e) => setDiscountPrice(e.target.value)}
                label="Discount Price"
              />
            </div>


            <div className='flex flex-col gap-2'>
              <label htmlFor='status' className='text-[#374151] text-base'>Status</label>
              <select
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className='border-[1px] border-[#E5E7EB] h-[40px] p-2 rounded-lg bg-[#EFEFEF]'
              >
                <option value="available">Available</option>
                <option value="borrowed">Borrowed</option>
              </select>
            </div>

            {/* <div className='flex flex-col gap-2'>
              <label htmlFor='category' className='text-[#374151] text-base'>Category</label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='border-[1px] border-[#E5E7EB] h-[40px] p-2 rounded-lg bg-[#EFEFEF]'
              >
                <option value="technology">Technology</option>
                <option value="fiction">Fiction</option>
              </select>
            </div> */}

            <div className='w-full flex items-center justify-end pt-3 pb-5 gap-5'>
              <button
                onClick={() => setShowCreate(false)}
                type="button"
                className='bg-white border-[1px] border-[#E5E7EB] w-full rounded-lg text-[#4B5563] h-[46px] flex font-bold items-center justify-center text-base cursor-pointer'>
                Cancel
              </button>

              <SubmitButton label="Save Book" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
