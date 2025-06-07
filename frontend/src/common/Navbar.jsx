import React, { useEffect } from 'react'
import logo from "../assets/lgo_icon.webp"
import { useState } from 'react'
import Button from '@/resuseable/Button'
import { useAuthStore } from '@/store/authStore'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'
import { useUserStore } from '@/store/userStore'

const navData = [
    {
        title: 'Home',
        path:  '/'
    },

        {
        title: 'About',
          path:  '/about'
    },

        {
        title: 'Books',
          path:  '/books'
    },

        {
        title: 'Contact ',
          path:  '/contact'
    },
]

const Navbar = () => {

const [active, setActive] = useState('/')
    const {user, fetchUser} = useAuthStore()
    const {token}  = useUserStore()
const location = useLocation()

useEffect(() => {
  if (!user) {
    // console.log('Fetching user...')
    fetchUser()
  }
}, [user, fetchUser])

useEffect(() => {
    setActive(location.pathname)
},[setActive,location])

console.log('user:', user)
console.log('token', token)

const [searchTerm,setSearchTerm] = useState()
const navigate = useNavigate()


const handleSearch = (e) => {
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString()
    navigate(`/search?${searchQuery}`)
}

const handleActive = (path) => {
  setActive(path)
}

const { logoutUser }= useAuthStore() 

const handleLogout = async() => {

  const {success, message}  =  await logoutUser()

         localStorage.removeItem('token')
         navigate('/auth')


  if(success){
    toast.success(message)
       localStorage.removeItem('token')
         navigate('/auth')
  } else {
    toast.error('Error occured')
  }

      

}

  return (
    <div className='flex justify-between items-center md:p-3 p-2 shadow-sm min-h-[70px]'>


        <Link to="/" className='flex gap-1'>
<img src={logo} alt='' loading='lazy'
className='w-8 h-8'  />
<h1 className='text-[#4CAF50] text-2xl font-bold'>Libro</h1>
        </Link>

        <div className='hidden md:flex items-center gap-2 lg:gap-5'>
            {
                navData.map((nav,index) => (
<Link  to={nav.path}
key={index} className={`
    ${active === nav.path ? "border-b-[#00AB6B] border-b-[2px]" : "text-[#4B5563]"}`}>
    <h1 onClick={() => handleActive(nav.path)} className={` text
        ${active === nav.path ? "text-[#00AB6B]" : "text-[#4B5563]"}`}>
            {nav.title}</h1>

</Link>
                ))
            }

        </div>

        <div className='hidden md:flex items-center gap-2 md:max-w-[510px] w-full'>
            <form onSubmit={handleSearch}
              className=' rounded-lg bg-[#F3F4F6] h-[46px] md:max-w-[400px] w-full flex items-center  px-2'>
                <input type='text' placeholder='Search books..'
                                  value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
        className='border-none outline-none bg-transparent w-full text-[#9CA3AF]'/>

                 <i className="ri-search-eye-line"></i>
            </form>


  { user  ? 

<div className='flex items-center gap-2'>
  <button     className='bg-[#00AB6B] px-3  w-full rounded-lg text-white h-[46px] flex
       items-center justify-center  cursor-pointer'>
  <p className="text-sm text-white opcaity-20">{user[0]?.fullName}</p> 
       </button>

         <button  onClick={handleLogout}
            className='bg-red-500 px-3 w-full rounded-lg text-white h-[46px] flex
       items-center justify-center text-base cursor-pointer'>
  <p className="text-sm text-white opcaity-20">Logout</p> 
       </button>

       </div>

       
 
   :
   <div className='flex '>


   <Button to={'/auth'}>
                Get Started
            </Button>

               </div>
}
        </div>
        

        {/* <div className='block md:hidden'
>
    <i className="ri-menu-2-line text-2xl font-bold"></i>
</div> */}

<div className='flex md:hidden gap-2'>
   <form onSubmit={handleSearch}
              className=' rounded-lg bg-[#F3F4F6] h-[46px] max-w-[130px] w-full flex items-center  px-2'>
                <input type='text' placeholder='Search books..'
                                  value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
        className='border-none outline-none bg-transparent w-full text-[#9CA3AF] text-sm md:text-base'/>

                 <i className="ri-search-eye-line"></i>
            </form>

              { user  ? 

<div className='flex items-center gap-1'>
  <button     className='bg-[#00AB6B] px-1  rounded-lg text-white h-[46px] flex
       items-center justify-center  cursor-pointer'>
  <p className="text-[10px] text-white opcaity-20">{user[0]?.fullName}</p> 
       </button>

         <button  onClick={handleLogout}
            className='bg-red-500 px-1 rounded-lg text-white h-[46px] flex
       items-center justify-center text-base cursor-pointer'>
  <p className="text-[10px] text-white opcaity-20">Logout</p> 
       </button>

       </div>

       
 
   :
   <div className='flex '>


   <Button to={'/auth'}>
                Get Started
            </Button>

               </div>
}
</div>


    </div>
  )
}

export default Navbar