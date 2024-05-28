import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Cart, LikesProduct, NotFound, SignIn, SignUp } from "@pages";
import SingleProduct from "../pages/products/singleProduct";
import { getDataFromCookie } from "@token-service";

const Index = () => {
  const id = getDataFromCookie("id");
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart" element={<Cart />} />
        <Route path="likes" element={<LikesProduct />} />
        <Route path={`product/${id}`} element={<SingleProduct />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
