import { create } from "zustand";
import { ProductsStore } from "@products-interface";
import { products } from "@service";
const useProductStore = create<ProductsStore>((set) => ({
  dataAll: [],
  productData: [],
  isLoading: false,
  totalCount: 1,
  getAll: async (params) => {
    try {
      set({ isLoading: true });
      const response = await products.get_all(params);
      if (response.status === 200) {
        set({
          totalCount: Math.ceil(response.data.total_count / params.limit),
          dataAll: response?.data?.products,
        });
      }
    } catch (error) {
      console.log(error);
      set({
        totalCount: 0,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  get: async (id) => {
    try {
      set({ isLoading: true });
      const response = await products.get(id);
      if (response.status === 200) {
        set({
          productData: response?.data,
        });
        return response?.data;
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
