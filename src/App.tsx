import { Outlet } from "react-router-dom";
import { Navbar } from "@components";
import { Products } from "@pages";
import { MyCarousel } from "@ui";

function App() {
  return (
    <>
      <Navbar />
      <div className="px-8 py-3 sm:mt-14 md:mt-24 lg:mt-24 xl:mt-16">
      <Outlet />
        <MyCarousel />
        <Products />
      </div>
    </>
  );
}

export default App;
