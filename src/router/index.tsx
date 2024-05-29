import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet, // Import Outlet component
} from "react-router-dom";
import App from "../App";
import { Cart, LikesProduct, NotFound } from "@pages";
import SingleProduct from "../pages/products/singleProduct";
import { Navbar, Footer } from "@components";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />} />
        <Route path="cart" element={<Cart />} />
        <Route path="likes" element={<LikesProduct />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
      <Navbar />
      <Outlet /> {/* Render child routes */}
      <Footer />
    </>
  );
};

export default Index;
