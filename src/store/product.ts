import { create } from "zustand";
import { ProductsStore, GetProducts, ProductData } from "@products-interface";
import { products } from "@service";

const useProductStore = create<ProductsStore>((set) => ({
  dataAll: [],
  productData: {} as ProductData,
  isLoading: false,
  totalCount: 1,

  getAll: async (params: GetProducts) => {
    try {
      set({ isLoading: true });
      const response = await products.get_all(params);
      console.log(response);
      
      if (response.status === 200) {
        set({
          // totalCount: response.data.total_count,
          totalCount: Math.ceil(response.data.total_count / params.limit),
          dataAll: response.data.products,
        });
      }
    } catch (error) {
      console.error("Error fetching all products:", error);
      set({ totalCount: 0 });
    } finally {
      set({ isLoading: false });
    }
  },

  get: async (id: string | undefined) => {
    try {
      set({ isLoading: true });
      const response = await products.get(id);
      if (response.status === 200) {
        set({ productData: response.data });
        set({ isLoading: false });
        return response.data;
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    } finally {
      set({ isLoading: false });
    }
  },
}));

export default useProductStore;
