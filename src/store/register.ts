import { create } from "zustand";
import { RegisterStore, Signin, Signup, Verify } from "@register-interfaces";
import { register } from "@service";
import { setDataToCookie } from "@token-service";
import { toast } from "react-toastify";

const useRegisterStore = create<RegisterStore>((set) => ({
  data: [],
  isLoading: false,

  signin: async (data: Signin) => {
    set({ isLoading: true });
    try {
      const response: any = await register.signin(data);
      if (response.status === 200) {
        set({ data: response.data });
        setDataToCookie("access_token", response.data.access_token);
        setDataToCookie("refresh_token", response.data.refresh_token);
        setDataToCookie("user_id", response?.data?.id);
        toast.success("Welkome!");
      }
      return response.status;
    } catch (error) {
      console.error("Sign-in error:", error);
    } finally {
      set({ isLoading: false });
    }
  },

  signup: async (data: Signup) => {
    set({ isLoading: true });
    try {
      const response: any = await register.signup(data);
      return response.status;
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
  verify: async (data: Verify) => {
    set({ isLoading: true });
    try {
      const response: any = await register.verify(data);
      return response.status;
    } catch (error) {
      console.error("Verify error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegisterStore;
