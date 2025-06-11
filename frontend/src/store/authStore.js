import axios from "axios";
import { create } from "zustand";

// const API_URL = 'http://localhost:3000/api/auth'
// axios.defaults.withCredentials = true;


export const useAuthStore = create((set) => ({
    user: null,
    error: null,
    message: null,
    isLoading: false,
    isFetchingUser: true,
    

    registerUser: async({fullName,email,password}) => {
        set({isLoading:true, error: null, message: null})

        if(!fullName || !email || !password){
         set({ message: "Please fill in all fields"})
               return { message: "Please fill in all fields" };
        }

        try {
            const response = await axios.post(`/api/auth/register`, {
                fullName,password, email
            })

      const { message, success} = response.data
      set({isLoading: false, message:message})
      return{ message, success}

        } catch (error) {
       const errMsg = error?.response?.data?.message || 'Error fetching user';
    set({ message: errMsg, isLoading: false });
    return { message: errMsg, success: false };
            
        }

    },

     loginUser: async({email,password}) => {
        set({isLoading:true, error: null, message: null})

        if( !email || !password){
         set({ message: "Please fill in all fields"})
               return { message: "Please fill in all fields" }; 
        }

        try {
            const response = await axios.post(`/api/auth/login`, {
                email,password
            })
         

      const { message, success, data } = response.data
      set({isLoading: false, message:message, user: data, token: response?.token })


      localStorage.setItem("token", response?.data.token  )

      return{ message, success}
        } catch (error) {
       const errMsg = error?.response?.data?.message || 'Error fetching user';
    set({ message: errMsg, isLoading: false });
    return { message: errMsg, success: false };
            
        }

    },

      logoutUser: async() => {
        set({isLoading:true, error: null, message: null})

       

        try {
            const response = await axios.post(`/api/auth/logout`)
         

      const { message, success} = response.data
        set({
      isLoading: false,
      message,
      user: null,
      token: null,
 
    });
      localStorage.removeItem("token"  )

      return {success, message}

        } catch (error) {
       const errMsg = error?.response?.data?.message || 'Error fetching user';
    set({ message: errMsg, isLoading: false });
    return { message: errMsg, success: false };
            
        }

    },



    
    fetchUser: async() => {
                set({isLoading:true, error: null, message: null, isFetchingUser: true})

        try {
             const response = await axios.get(`/api/auth/fetch-user`)

             const {message, success,data} = response.data
  set({ isLoading: false, message: message, isFetchingUser: false, user:data})
             return {message, success}
            
        } catch (error) {

  const errMsg = error?.response?.data?.message || 'Error fetching user';
    set({ message: errMsg, isLoading: false, isFetchingUser: false, user: null });
    return { message: errMsg, success: false };
            
        }

    }



}))




