import { Outlet } from "react-router-dom";
import { Navbar } from "@components";
import { Products } from "@pages";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Products/>
    </>
  );
}

export default App;
