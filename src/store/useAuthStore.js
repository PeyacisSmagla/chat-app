import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSignUp: false,
  isLogin: false,
  isUpdateProfile: false,
  isCheckingAuth: true,
  onlineUsers: [],

  checkAuth: async () => {
    try {
      const { data } = await axiosInstance.get("/auth/check");
      set({ authUser: data });
    } catch (error) {
      console.log(error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signUp: async (formData) => {
    set({ isSignUp: true });
    try {
      const { data } = await axiosInstance.post("/auth/signup", formData);
      set({ authUser: data });
      toast.success("Account Created Successfully");
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Something went wrong, try again"
      );
    } finally {
      set({ isSignUp: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  login: async (formData) => {
    try {
      const { data } = await axiosInstance.post("/auth/login", formData);
      set({ authUser: data });
      toast.success("Logged In Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },

  updateProfile: async (payload) => {
    set({ isUpdateProfile: true });
    try {
      const { data } = await axiosInstance.put("/auth/update-profile", payload);
      set({ authUser: data });
      toast.success("Profile Updated Successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUpdateProfile: false });
    }
  },
}));
