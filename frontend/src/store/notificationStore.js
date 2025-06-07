import axios from "axios";
import { create } from "zustand";

const API_URL = "http://localhost:3000/api/notification"
axios.defaults.withCredentials = true

export const useNotificationStore = create((set) => ({

    noifications: [],
    isLoading: false,
    error:null,

    getNotification: async() => {
        try {
              const response = await
               axios.get(`${API_URL}?limit=3`);

            const {data, success, message} = response.data
            set({ notifications: [data]})

            return {success, message}
            
        } catch (error) {
                const errorMsg = error?.response.data.message || 'Errror occured'
            set({ error: errorMsg, isLoading: false})
            
        }
    },


    postNotification: async(messages) => {
        set({isLoading: true, error: null})

        try {
            const response = await axios.post(API_URL, messages)

            const {message,success,data} = response.data
            set({isLoading:false, notifications: data})

            return { message, success}
            
        } catch (error) {
            const errorMsg = error?.response.data.message || 'Errror occured'
            set({ error: errorMsg, isLoading: false})
            
        }
    }


}))