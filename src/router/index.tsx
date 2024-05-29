import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Cart, LikesProduct, NotFound } from "@pages";
import SingleProduct from "../pages/products/singleProduct";
// import { MainLayout } from "../layout";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        {/* <Route path="user/*" element={<MainLayout />}> */}
        <Route path="cart" element={<Cart />} />
        <Route path="likes" element={<LikesProduct />} />
        <Route path="product/:id" element={<SingleProduct />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
