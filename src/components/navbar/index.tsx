import { DarkThemeToggle, Navbar } from "flowbite-react";
import Search from "../ui/search";
import SignInModal from "../modals/signin";
import { cartIcon, likeIcon } from "@icons";
import { Tooltip } from "flowbite-react";

function Component() {
  return (
    <Navbar rounded className="">
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ">
          Online Kiyim Do'koni
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Search />
      <Navbar.Collapse>
        <div className="flex gap-6 items-center">
          <DarkThemeToggle />
          <SignInModal />
          <Tooltip
            className="bg-gray-500 text-white dark:bg-gray-700"
            content="Yoqtirilganlar"
            placement="bottom"
          >
            <a href="/likes">{likeIcon}</a>
          </Tooltip>
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
