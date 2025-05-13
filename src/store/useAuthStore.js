import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSignUp: false,
  isLogin: false,
  isUpdateProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res });
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
      const data = await axiosInstance.post("/auth/signup", formData);
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
}));
