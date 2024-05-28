import { Outlet } from "react-router-dom";
import { Navbar, UiCategory } from "@components";
import { MyCarousel, ProductCard } from "@ui";

const index = () => {
  return (
    <>
      <Outlet />
      <Navbar />
      <UiCategory />
      <MyCarousel />
      <ProductCard/>
    </>
  );
};

export default index;
