import axios from "axios";
import { create } from "zustand";



const API_URL = "http://localhost:3000/api/users"
axios.defaults.withCredentials = true



export const useUserStore = create((set) => ({
    users: [],
    error: null,
    message: null,
    isLoading: false,
    user: null,
    isFetchingUsers: true,
    token : null,


    initalizeToken: () => {
     const token = localStorage.getItem('token')
     set({token})
    },

    fetchUsers : async() => {
           set({isLoading: true, error:null, message:null })
         const token = localStorage.getItem("token");

    try {
        const response = await axios.get(API_URL, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })

        const {message, data , success} = response.data
        set({ users: data, message:null, isFetchingUsers: false})

        return { message, success}
    } catch (error) {
        const errorMsg = error?.response.data.message || 'Internal Server error'
          set({isLoading: false, error: errorMsg, message:errorMsg})

          return({ message:errorMsg, success:false, })
        
    }

    },

    fetchSingleUser : async(id) => {
           set({isLoading: false, error:null, message:null , isFetchingUser: true})

        const token = localStorage.getItem("token");
          if (!token) return;


    try {
        const response = await axios.get(`API_URL/${id}`, {
            headers: {
                Authorization : `Bearer ${token}`
            }
        })

        const {message, data, success} = response.data
        set({  message:null, user: data, isFetchingUser: false,})

        return { message, success}
    } catch (error) {
        const errorMsg = error?.response.data.message || 'Internal Server error'
          set({isLoading: false, error:null, message:errorMsg})

          return({ message:errorMsg, success:false, })
        
    }

    },


     fetchUsersStats: async () => {
        set({ isLoading: false, error: null, message: null });
        const token = localStorage.getItem('token')
    
        try {
          const response = await axios.get(`${API_URL}/stats`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
          });
    
          const { success,  suspendedUser, activeUser} = response.data;
    
          //    console.log("📦 response", response.data);
    
          set({
            
        suspendedUser, activeUser,  message: null,
          });
    
          return { success, suspendedUser, activeUser };
        } catch (error) {
          const errorMsg = error?.response.data.message || "Internal Server error";
          set({ isLoading: false, error: null, message: errorMsg });
    
          return { message: errorMsg, success: false };
        }
      },

}))