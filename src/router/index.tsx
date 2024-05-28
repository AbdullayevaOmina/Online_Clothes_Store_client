import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Cart, NotFound, Posts, Products, SignIn, SignUp } from "@pages";
import { MainLayout } from "@layout";

const Index = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="user/*" element={<MainLayout />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="products" element={<Products />} />
          <Route path="posts" element={<Posts />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Index;
