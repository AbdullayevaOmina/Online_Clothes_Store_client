import { create } from "zustand";
import { RegisterStore, Signin, Signup } from "@register-interfaces";
import { register } from "@service";

const useRegisterStore = create<RegisterStore>((set) => ({
  data: [],
  isLoading: false,

  signin: async (data: Signin) => {
    set({ isLoading: true });
    try {
      const response: any = await register.signin(data);
      if (response.status === 200) {
        set({ data: response.data });
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
      set({ data: response.data });
      return response.status;
    } catch (error) {
      console.error("Sign-up error:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useRegisterStore;
