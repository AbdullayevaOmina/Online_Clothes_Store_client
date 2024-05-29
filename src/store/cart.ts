import { create } from "zustand";

const useProductStore = create((set) => ({
  cart: [],
  liked: [],

  // Function to retrieve cart data from localStorage
  getCartData: () => {
    const cartData = JSON.parse(localStorage.getItem("cartProducts") || "[]");
    set({ cart: cartData });
  },

  // Function to retrieve liked data from localStorage
  getLikedData: () => {
    const likedData = JSON.parse(localStorage.getItem("likedProducts") || "[]");
    set({ liked: likedData });
  },

  // Function to add a new product ID to the cart
  addToCart: (productId: string) => {
    set((state: any) => {
      const updatedCart = [...state.cart, productId];
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },

  // Function to remove a product ID from the cart
  removeFromCart: (productId: string) => {
    set((state: any) => {
      const updatedCart = state.cart.filter((id: string) => id !== productId);
      localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    });
  },

  // Function to add a product ID to liked products
  addToLiked: (productId: string) => {
    set((state: any) => {
      const updatedLiked = [...state.liked, productId];
      localStorage.setItem("likedProducts", JSON.stringify(updatedLiked));
      return { liked: updatedLiked };
    });
  },

  // Function to remove a product ID from liked products
  removeFromLiked: (productId: string) => {
    set((state: any) => {
      const updatedLiked = state.liked.filter((id: string) => id !== productId);
      localStorage.setItem("likedProducts", JSON.stringify(updatedLiked));
      return { liked: updatedLiked };
    });
  },
}));

export default useProductStore;
