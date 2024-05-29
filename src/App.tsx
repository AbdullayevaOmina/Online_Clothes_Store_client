import { Products } from "@pages";
import { MyCarousel } from "@ui";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="px-8 py-3 sm:mt-14 md:mt-24 lg:mt-24 xl:mt-16">
        <MyCarousel />
        <Products />
      </div>
    </>
  );
}

export default App;
