import React, { useEffect, useState } from 'react'

import white_logo from "../assets/white_logo.png"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import user_logo from "../assets/user_logo.png"
import { useAuthStore } from '@/store/authStore'
import { toast } from 'react-toastify'

const navData = [
    {    

        link:'/dashboard',
        title:"Dashboard",
        icon: "ri-home-9-line"
    },

      {   
         link:'/dashboard/books',
        title:"Books",
        icon: "ri-git-repository-line"
    },

      {
          link:'/dashboard/staffs',
        title:"Staff",
        icon: "ri-graduation-cap-line"
    },

     {
          link:'/dashboard/settings',
        title:"Settings",
        icon: "ri-settings-5-line"
    },

]


const DashboardLayout = ({children}) => {

    const location = useLocation()
    const isActive = location.pathname 
    const {user, fetchUser} = useAuthStore()

    useEffect(() => {
       fetchUser()
    }, [fetchUser])

    console.log('User in dashbord:', user)

    const [showNav, setShowNav] = useState(false)

    const { logoutUser} =  useAuthStore()
    const  navigate = useNavigate()

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
    <div className='flex max-h-screen h-full  overflow-hidden z-30'>


<div className='hidden md:block'>

{ showNav ? 

      
        <div className='md:max-w-[320px] w-full bg-[#4CAF50] h-screen 
        hidden md:flex flex-col justify-between'>

<div className='flex flex-col md:p-3 gap-10'>


<div className='flex items-center justify-between gap-4'>


 <div className='flex  pl-2 gap-2 w-full'>
<img src={white_logo} alt='' loading='lazy'
className='w-8 h-8'  />
<h1 className='text-white text-2xl font-bold'>Libro</h1>
        </div>


<div className='flex cursor-pointer'>
  <i onClick={() => setShowNav(!showNav)}
   class="ri-menu-fold-fill text-white text-xl"></i>
</div>
      

        </div>

     <div className='flex flex-col'>
    {
        navData.map((nav,index)=>(
            <Link key={index} to={nav.link}
   className={` px-4 py-3 flex items-center h-12 max-w-[208px] md:max-w-[300px]
       gap-3 cursor-pointer   w-full
       ${isActive === nav.link ? "bg-white rounded-lg" : ""}`}>
                <i className={`${nav.icon} 
                    ${isActive ===  nav.link ? "text-[#4CAF50]" : "text-white"}`} > </i>
          <h1 className={`text-base
          ${isActive === nav.link ? "text-[#4CAF50]" : "text-white"}
         `} >{nav.title}</h1>
            </Link>
        ))
    }
</div>

            
</div>

<div className='flex flex-col md:p-5 border-t-[1px] border-t-white gap-4'>

    <div className='w-full flex items-center justify-center'>

        <button onClick={handleLogout}
         className='border-[1px] flex items-center justify-center  border-[#fff]
        max-w-[208px] h-10 w-full rounded-lg gap-2 cursor-pointer '>
<i class="ri-door-open-line text-white"></i>
<h1 className='text-white text-base'>Logout</h1>
        </button>
    </div>

</div>

        </div>

 :

        <div className='max-w-[100px] w-full bg-[#4CAF50] h-screen   p-3'>


<div className='flex flex-col md:p-3 gap-10'>


<div className='flex flex-col-reverse items-center gap-4'>


 <div className='flex gap-2 w-full'>
<img src={white_logo} alt='' loading='lazy'
className='w-6 h-6'  />
<h1 className='text-white text-base font-bold'>Libro</h1>
        </div>


<div className='flex cursor-pointer'>
  <i onClick={() => setShowNav(!showNav)}
   class="ri-menu-unfold-line text-white text-3xl"></i>
</div>
      

        </div>

     <div className='flex flex-col'>
    {
        navData.map((nav,index)=>(
            <Link key={index} to={nav.link}
   className={` px-4 py-3 flex items-center h-12
       gap-3 cursor-pointer   w-full
       ${isActive === nav.link ? "bg-white rounded-lg" : ""}`}>
                <i className={`${nav.icon}  text-2xl
                    ${isActive ===  nav.link ? "text-[#4CAF50]" : "text-white"}`} > </i>

            </Link>
        ))
    }
</div>

            
</div>


<div className='flex flex-col md:p-5 border-t-[1px] border-t-white gap-4'>


    <div className='w-full flex items-center justify-center'>

        <button onClick={handleLogout}
         className='border-[1px] flex items-center justify-center  border-[#fff]
         h-10 w-full rounded-lg gap-2 cursor-pointer '>
<i class="ri-door-open-line text-white"></i>

        </button>
    </div>

</div>

        </div>

}
        </div>


{/* Smaller screen sidebar */}

          <div className='max-w-[70px] w-full bg-[#4CAF50] h-screen  flex flex-col justify-between 
           md:hidden  p-2'>


<div className='flex flex-col md:p-3 gap-10'>


<div className='flex flex-col-reverse items-center gap-4'>


 <div className='flex  gap-1 w-full'>
<img src={white_logo} alt='' loading='lazy'
className='w-5 h-5'  />
<h1 className='text-white text-sm font-bold'>Libro</h1>
        </div>


<div className='flex cursor-pointer'>
  <i onClick={() => setShowNav(!showNav)}
   class="ri-menu-fold-fill text-white text-3xl"></i>
</div>
      

        </div>

     <div className='flex flex-col'>
    {
        navData.map((nav,index)=>(
            <Link key={index} to={nav.link}
   className={` px-4 py-3 flex items-center h-12
       gap-3 cursor-pointer   w-full
       ${isActive === nav.link ? "bg-white rounded-lg" : ""}`}>
                <i className={`${nav.icon}  text-2xl
                    ${isActive ===  nav.link ? "text-[#4CAF50]" : "text-white"}`} > </i>

            </Link>
        ))
    }
</div>

            
</div>



<div className='flex flex-col items-center justify-center border-t-[1px] border-t-white gap-4 min-h-[30%]'>


    <div className='w-full flex items-center justify-center'>

        <button onClick={handleLogout}
         className='border-[1px] flex items-center justify-center  border-[#fff]
         h-10 w-full rounded-lg gap-2 cursor-pointer '>
<i class="ri-door-open-line text-white"></i>

        </button>
    </div>

</div>

        </div>
        

        {/* main content */}
        <div className=' overflow-y-scroll w-full flex flex-col gap-6 
         bg-[#f9fafc] pb-10'>

            <div className='flex items-center justify-between min-h-10 px-3 pt-5 w-full'>
                <div className='flex flex-col'>
                    <h1 className='text-[#1F2937] font-bold md:text-2xl'>Books Management</h1>
                    <p className='text-[#6B7280]  text-base'> Manage your library books </p>
                </div>

                    <div className='flex  justify-center items-center gap-4 '>
        <img src={user[0]?.profileImage  || user_logo} alt='' loading='lazy'
        className='w-10 h-10 rounded-full'
         />

         <div className='flex flex-col'>
            <h1 className='font-bold text-sm leading-5 text-black '>Admin</h1>

            { user? 
             <p className="text-sm text-black">{user[0]?.fullName}</p> :   <p>User</p> }
          

            {/* <div className='flex items-center'>
                <i className="ri-settings-5-line text-white"></i>
                <h1 className='text-sm text-white opcaity-70'>Settings</h1>
            </div> */}

         </div>
    </div>


                {/* <div className=' flex items-center gap-4 max-w-[500px] w-full'>

               
                    <div className='min-h-10 w-full max-w-[500px] focus-within:outline-1
                    focus-within:outline-[#4CAF50] flex items-center p-1
                     rounded-lg border-[1px] border-gray-200 '>
                      
                        <input type='text' placeholder='Search....' 
                        className='bg-transparent outline-none border-0 w-full
                        text-[#4CAF50] opcaity-80 placeholder:text-[#4CAF50]' />
                          <i className="ri-search-line text-[#4B5563]"></i>
                        
                    </div>

                    <div className='flex gap-2'>
                        <i className="ri-notification-3-line text-2xl text-[#4B5563]"></i>
                        <i class="ri-door-open-line  text-2xl text-[#4B5563]"></i>
                    </div>

                </div> */}

            </div>

            <div className='overflow-y-scroll hide-scrollbar p-2'>
  {children}
            </div>
          
        </div>



    </div>
  )
}

export default DashboardLayout