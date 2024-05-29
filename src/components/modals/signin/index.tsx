"use client";
import { useState } from "react";
import { userIcon } from "@icons";
import {
  Button,
  Checkbox,
  Label,
  Modal,
  Radio,
  TextInput,
  Tooltip,
} from "flowbite-react";

export default function SignInModal() {
  const [openModalIn, setOpenModalIn] = useState(false);
  const [openModalUp, setOpenModalUp] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  const toggleModal = (type: string) => {
    setOpenModalIn(type === "in");
    setOpenModalUp(type === "up");
    setLoginData({ email: "", password: "" });
    setSignupData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
    });
  };

  const handleInputChange = (e: any, setData: any) => {
    const { id, value } = e.target;
    setData((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (type: string) => (e: any) => {
    e.preventDefault();
    console.log(
      type === "in" ? "Sign In:" : "Sign Up:",
      type === "in" ? loginData : signupData
    );
    // Replace with actual submission logic
  };

  return (
    <div>
      <Tooltip
        className="bg-gray-500 text-white dark:bg-gray-700"
        content="Roy'xatdan o'tish"
        placement="bottom"
      >
        <a onClick={() => toggleModal("in")}>{userIcon}</a>
      </Tooltip>

      {/* Sign In Modal */}
      <Modal show={openModalIn} size="md" onClose={() => toggleModal("")} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit("in")} className="space-y-6">
            <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              Tizimga kirish
            </h3>
            <div>
              <Label htmlFor="email" value="Email" className="mb-2 block" />
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={loginData.email}
                onChange={(e) => handleInputChange(e, setLoginData)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Parol" className="mb-2 block" />
              <TextInput
                id="password"
                type="password"
                value={loginData.password}
                onChange={(e) => handleInputChange(e, setLoginData)}
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">Remember me</Label>
              </div>
              <a
                href="#"
                className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Parolni unutdingizmi?
              </a>
            </div>
            <Button type="submit" className="w-full">
              Kirish
            </Button>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Ro'yxatdan o'tmaganmisz?&nbsp;
              <a
                onClick={() => toggleModal("up")}
                className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
              >
                Ro'yxatdan o'tish
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={openModalUp} size="md" onClose={() => toggleModal("")} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit("up")} className="space-y-6">
            <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              Ro'yxatdan o'tish
            </h3>
            <div>
              <Label
                htmlFor="firstName"
                value="Familiya"
                className="mb-2 block"
              />
              <TextInput
                id="firstName"
                placeholder="Familiya"
                value={signupData.firstName}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
            </div>
            <div>
              <Label htmlFor="lastName" value="Ism" className="mb-1 block" />
              <TextInput
                id="lastName"
                placeholder="Ism"
                value={signupData.lastName}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
            </div>
            <fieldset className="flex max-w-md gap-4">
              <div className="flex items-center gap-2">
                <Radio id="united-state" name="countries" value="USA" />
                <Label htmlFor="united-state">Erkak</Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio id="ayol" name="countries" value="Ayol" />
                <Label htmlFor="ayol">Ayol</Label>
              </div>
            </fieldset>
            <div>
              <Label htmlFor="email" value="Email" className="mb-2 block" />
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={signupData.email}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Parol" className="mb-2 block" />
              <TextInput
                id="password"
                type="password"
                value={signupData.password}
                onChange={(e) => handleInputChange(e, setSignupData)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Yuborish
            </Button>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Ro'yxatdan o'tganmisz?&nbsp;
              <p
                onClick={() => toggleModal("in")}
                className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
              >
                Tizimga Kirish
              </p>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}
