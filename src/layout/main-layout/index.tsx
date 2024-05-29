import { Outlet } from "react-router-dom";
import { MyCarousel } from "@ui";
import { Products } from "@pages";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <MyCarousel />
      <Products />
    </>
  );
};

export default MainLayout;
