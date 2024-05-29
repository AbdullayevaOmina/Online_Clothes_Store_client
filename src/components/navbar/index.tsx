import React, { useState, useEffect } from "react";
import { DarkThemeToggle, Navbar } from "flowbite-react";
import Search from "../ui/search";
import { SignInModal } from "@modals";
import { cartIcon, likeIcon } from "@icons";
import { Tooltip } from "flowbite-react";
import logo from "../../assets/Logo.png";
import { UiCategory } from "@components";

const MyNavbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode === "true";
  });

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode.toString());
      return newMode;
    });
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-gray-900", "text-white");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-gray-900", "text-white");
    }
  }, [darkMode]);

  return (
    <div>
      <Navbar className="fixed top-0 left-0 right-0 z-50">
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            {/* Online Kiyim Do'koni */}
            <img className="w-44" src={logo} alt="" />
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Search />
          <UiCategory />
          <div className="flex gap-6 items-center">
            <button onClick={toggleDarkMode}>
              <DarkThemeToggle />
            </button>
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
            {/* <Navbar.Link href="/cart" active>
            Home
          </Navbar.Link> */}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
