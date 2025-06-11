import React, { useState } from 'react'
import InputField from '@/resuseable/InputField'
import SubmitButton from '@/resuseable/SubmitButton'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '@/store/authStore'
import { toast } from 'react-toastify'
import { useUserStore } from '@/store/userStore'

const Login = () => {


  const {loginUser} = useAuthStore()
  const navigate = useNavigate()


const [ email, setEmail] = useState('')
const [ password, setPassword] = useState('')

const {user} = useAuthStore()
// eslint-disable-next-line no-unused-vars
const {token } = useUserStore()



const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    return toast.error('Please fill in all fields');
  }

  
  console.log('user details', user);

  try {
    const { message, success } = await loginUser({ email, password });

    if (success) {
      const route = user[0]?.role === 'admin' ? "/dashboard" : "/";
      toast.success(message);
      setPassword('');
      setEmail('');
      navigate(route);
      console.log('route path:', route)
    } else {
      toast.error('Error logging in');
    }
  } catch (error) {
    console.error('login error:', error.message);
    toast.error(error.message || 'Login failed');
  }
};

  return (

<div className=' w-full flex items-center justify-center'>


<div className=' m:p-5 w-full  flex flex-col gap-8'>


            <div className='w-full'>
                <form onSubmit={handleSubmit}
                 className='flex flex-col gap-4 w-full'>

                 


                    <div className='w-full'>
                        <InputField  
                        name="Email"
                        placeholder="Enter your email"
                        type="email"
                          value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        icon="ri-mail-line"
                        label="Email"
                        />

                    </div>

                      <div className='w-full'>
                        <InputField  
                        name="Password"
                        placeholder="Enter your password"
                        type="password"
                          value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon="ri-lock-line"
                        label="Password"
                        />

                    </div>

                    

                    <div className='w-full'>
                        <SubmitButton  
                        label="Login" />
                    </div>


                </form>

                <p className='text-[#6B7280] text-base text-center w-full py-4'>© 2024 Libro. All rights reserved.</p>
            </div>
    
</div>


</div>
  )
}

export default Login