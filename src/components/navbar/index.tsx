import { Navbar } from "flowbite-react";
import Search from "../ui/search";
import SignInModal from "../modals/signin";
import LikesProduct from "../modals/likes/LikesProduct";
import { cartIcon } from "@icons";
import { Tooltip } from "flowbite-react";

function Component() {
  return (
    <Navbar rounded className="">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
          Online Kiyim Do'koni
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Search />
      <Navbar.Collapse>
        <div className="flex gap-6 ">
          <SignInModal />
          <LikesProduct />
          <Tooltip
            className="bg-gray-500 text-white dark:bg-gray-700"
            content="Savat"
            placement="bottom"
          >
            <a href="/cart">{cartIcon}</a>
          </Tooltip>
        </div>
        {/* <Navbar.Link href="/" active>
          Home
        </Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Component;
