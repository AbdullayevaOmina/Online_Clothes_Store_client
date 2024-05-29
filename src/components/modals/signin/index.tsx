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
import { useRegisterStore } from "@store";
import { toast } from "react-toastify";

const SignInModal = () => {
  const { signin, signup, isLoading } = useRegisterStore();
  const [openModal, setOpenModal] = useState<"in" | "up" | "">("");
  const [status, setStatus] = useState<number | undefined | null>();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
  });

  const toggleModal = (type: "in" | "up" | "") => {
    setOpenModal(type);
    setLoginData({ email: "", password: "" });
    setSignupData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      gender: "",
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setData: React.Dispatch<React.SetStateAction<any>>
  ) => {
    const { id, value } = e.target;
    setData((prev: any) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handleSubmit = (type: "in" | "up") => async (e: React.FormEvent) => {
    e.preventDefault();
    if (type === "in") {
      const st = await signin(loginData);
      setStatus(st);
    } else {
      const st = await signup(signupData);
      setStatus(st);
    }
    if (status === 200 || 201) {
      toggleModal("");
      toast.success("Welcome!");
    }
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

      {/* Modal Component */}
      <Modal show={!!openModal} size="md" onClose={() => toggleModal("")} popup>
        <Modal.Header />
        <Modal.Body>
          <form onSubmit={handleSubmit(openModal)} className="space-y-6">
            <h3 className="text-xl font-medium text-center text-gray-900 dark:text-white">
              {openModal === "in" ? "Tizimga kirish" : "Ro'yxatdan o'tish"}
            </h3>
            {openModal === "up" && (
              <>
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
                  <Label
                    htmlFor="lastName"
                    value="Ism"
                    className="mb-1 block"
                  />
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
                    <Radio
                      id="male"
                      name="gender"
                      value="male"
                      checked={signupData.gender === "male"}
                      onChange={handleRadioChange}
                    />
                    <Label htmlFor="male">Erkak</Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <Radio
                      id="female"
                      name="gender"
                      value="female"
                      checked={signupData.gender === "female"}
                      onChange={handleRadioChange}
                    />
                    <Label htmlFor="female">Ayol</Label>
                  </div>
                </fieldset>
              </>
            )}
            <div>
              <Label htmlFor="email" value="Email" className="mb-2 block" />
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={openModal === "in" ? loginData.email : signupData.email}
                onChange={(e) =>
                  handleInputChange(
                    e,
                    openModal === "in" ? setLoginData : setSignupData
                  )
                }
                required
              />
            </div>
            <div>
              <Label htmlFor="password" value="Parol" className="mb-2 block" />
              <TextInput
                id="password"
                type="password"
                value={
                  openModal === "in" ? loginData.password : signupData.password
                }
                onChange={(e) =>
                  handleInputChange(
                    e,
                    openModal === "in" ? setLoginData : setSignupData
                  )
                }
                required
              />
            </div>
            {openModal === "in" && (
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
            )}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? "Loading..."
                : openModal === "in"
                ? "Kirish"
                : "Yuborish"}
            </Button>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              {openModal === "in"
                ? "Ro'yxatdan o'tmaganmisz?"
                : "Ro'yxatdan o'tganmisz?"}
              &nbsp;
              <a
                onClick={() => toggleModal(openModal === "in" ? "up" : "in")}
                className="text-cyan-700 hover:underline dark:text-cyan-500 cursor-pointer"
              >
                {openModal === "in" ? "Ro'yxatdan o'tish" : "Tizimga Kirish"}
              </a>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default SignInModal;
