import axios from "axios";
import { create } from "zustand";



export const useBookStore = create((set) => ({
  books: [],
  bookDetails: null,
  availableBooks: [],
  borrowedBooks: [],
  error: null,
  message: null,

  fetchBook: async () => {
    set({ isLoading: false, error: null, message: null });

    try {
      const response = await axios.get('/api/books');

      const {  data, success } = response.data;
      set({ books: data, message: null });

      return { success };
    } catch (error) {
      const errorMsg = error?.response?.data?.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },


  fetchSingleBook : async(id) => {

    
    try {
      const response = await axios.get(`/api/books/${id}`);

      const {  data, success } = response.data;
      set({ bookDetails: data, message: null });

      return { success };
    } catch (error) {
      const errorMsg = error?.response?.data?.message || error?.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }

  },

  createBook: async ({
    image,
    bookName,
    authorName,
    price,
    discountPrice,
    status,
  }) => {
    set({ isLoading: false, error: null, message: null });

    try {
      const response = await axios.post(`/api`, {
        image,
        bookName,
        authorName,
        price,
        discountPrice,
        status,
      });

      const { message, data, success } = response.data;
      set({ books: data, message: null });

      return { message, success };
    } catch (error) {
      const errorMsg = error?.response.data.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },

  updateBook: async ({
    id,
    image,
    bookName,
    authorName,
    price,
    discountPrice,
    status,
  }) => {
    set({ isLoading: false, error: null, message: null });

    try {
      const response = await axios.put(`/api/books/${id}`, {
        image,
        bookName,
        authorName,
        price,
        discountPrice,
        status,
      });

      const { message, success } = response.data;
      set({ message: null });

      return { message, success };
    } catch (error) {
      const errorMsg = error?.response.data.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },

  deleteBook: async (id) => {
    set({ isLoading: true, error: null, message: null });

    try {
      const response = await axios.delete(`/api/books/${id}`);

      const { message, success } = response.data;
      set({ isLoading: false, message: null });

      return { message, success };
    } catch (error) {
      const errorMsg = error?.response.data.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },

  fetchBooksStats: async () => {
    set({ isLoading: false, error: null, message: null });

    try {
      const response = await axios.get(`/api/books/stats`);

      const { message, books, borrowedBooks, availableBooks, success } =
        response.data;

      //    console.log("📦 response", response.data);

      set({
        books,
        availableBooks: availableBooks,
        borrowedBooks: borrowedBooks,
        message: null,
      });

      return { message, borrowedBooks, availableBooks, success };
    } catch (error) {
      const errorMsg = error?.response.data.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },

  searchBooks: async (searchTerm) => {
    set({ isLoading: true, error: null, message: null });

    try {
      const response = await axios.get(`/api/books/search?${searchTerm}`);

      const { books } = response.data;
      set({ books: books, isLoading: false, message: null });
    } catch (error) {
      const errorMsg = error?.response.data.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },

  borrowBook: async (id) => {
    set({ isLoading: true, error: null, message: null });

    try {
      const response = await axios.patch(`/api/books/borrow/${id}`);

      const { message, success, data } = response.data;
      set({ isLoading: false, message: null, books: data });

      return { message, success, bookStatus: data.status };
    } catch (error) {
      const errorMsg = error?.response.data.message || "Internal Server error";
      set({ isLoading: false, error: null, message: errorMsg });

      return { message: errorMsg, success: false };
    }
  },
}));
