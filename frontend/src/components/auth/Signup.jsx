import React, { useState } from 'react'
import InputField from '@/resuseable/InputField'
import SubmitButton from '@/resuseable/SubmitButton'
import { useAuthStore } from '@/store/authStore'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  
  const {registerUser} = useAuthStore()
  const navigate = useNavigate()

const [fullName, setFullName] = useState('')
const [ email, setEmail] = useState('')
const [ password, setPassword] = useState('')
const [ confirmPassword, setConfirmPassword] = useState('')


const handleSubmit = async(e) =>{
  e.preventDefault()

  if(confirmPassword !== password){
    toast.error('passowrd doesnt match')
    return;
  }

  try {
    const {message, success} = await registerUser({  fullName,email,password})
 console.log('credentials', [password,email,fullName, confirmPassword])

  if (success) {
      toast.success(message);
      setPassword('');
      setEmail('');
      setFullName('');
      setConfirmPassword('');
          navigate('/')
    }

      
         

  } catch (error) {
    console.error(error.message)
    toast.error(error.message)
  }
}

  return (

<div className=' w-full flex items-center justify-center'>


<div className=' m:p-5 w-full  flex flex-col gap-8'>


            <div className='w-full'>
                <form onSubmit={handleSubmit}
                 className='flex flex-col gap-4 w-full'>

                    <div className='w-full'>
                        <InputField  
                        name="Name"
                        placeholder="Enter your full name"
                        type="text"
                          value={fullName}
                        onChange={(e) => setFullName( e.target.value)}
                        icon="ri-user-line"
                        label="Full Name"
                        />
                    </div>


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
                        <InputField  
                        name="Confirm Password"
                        placeholder="Confirm your password"
                        type="password"
                          value={confirmPassword}
                        onChange={(e) => setConfirmPassword( e.target.value)}
                        icon="ri-lock-line"
                        label="Confirm Password"
                        />

                    </div>

                    <div className='w-full'>
                        <SubmitButton 
                        label="Register"/>
                    </div>


                </form>

                <p className='text-[#6B7280] text-base text-center w-full py-4'>© 2024 Libro. All rights reserved.</p>
            </div>
    
</div>


</div>
  )
}

export default Signup