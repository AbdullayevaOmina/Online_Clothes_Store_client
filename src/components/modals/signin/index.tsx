"use client";
import { useEffect, useRef, useState } from "react";
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
  const { signin, signup, isLoading, verify } = useRegisterStore();
  const [openModal, setOpenModal] = useState<"in" | "up" | "">("");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "",
  });
  const [verifyData, setVerifyData] = useState({
    email: signupData.email,
    otp: "",
  });
  const [verifyModal, setVerifyModal] = useState<boolean>(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  // --------------------------> Timer <----------------------------
  const [timeLeft, setTimeLeft] = useState(180); // 3 minutes = 180 seconds
  useEffect(() => {
    if (!verifyModal) {
      setTimeLeft(180);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timeLeft === 0) {
      setVerifyModal(false);
    }

    return () => clearInterval(timer);
  }, [verifyModal, timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")} : ${String(secs).padStart(
      2,
      "0"
    )}`;
  };
  // --------------------------> Timer <----------------------------

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
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData((prev) => ({ ...prev, gender: e.target.value }));
  };

  const handleSubmit = (type: "in" | "up") => async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (type === "in") {
        const st = await signin(loginData);
        if (st === 200) {
          setOpenModal("");
        }
      } else {
        const st = await signup(signupData);
        if (st === 200) {
          setVerifyData({ email: signupData.email, otp: "" });
          setVerifyModal(true);
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  // ----------------------------------------------VERIFY CODE
  const handleVerifyInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setVerifyData((prev) => ({ ...prev, [id]: value }));
  };

  const verifySubmit = async () => {
    try {
      const responseStatus = await verify(verifyData);
      console.log(verifyData);
      if (responseStatus === 200) {
        toast.success("Verification successful!");
        const st = await signin({
          email: signupData.email,
          password: signupData.password,
        });
        if (st === 200) setOpenModal("");
        setVerifyModal(false);
        toggleModal("");
      } else {
        toast.error("Verification failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  // ----------------------------------------------VERIFY CODE

  return (
    <div>
      <Tooltip
        className="bg-gray-500 text-white dark:bg-gray-700"
        content="Roy'xatdan o'tish"
        placement="bottom"
      >
        <a onClick={() => toggleModal("in")}>{userIcon}</a>
      </Tooltip>

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
                    value="Ism"
                    className="mb-2 block"
                  />
                  <TextInput
                    id="firstName"
                    placeholder="Ism"
                    value={signupData.firstName}
                    onChange={(e) => handleInputChange(e, setSignupData)}
                    required
                  />
                </div>
                <div>
                  <Label
                    htmlFor="lastName"
                    value="Familiya"
                    className="mb-1 block"
                  />
                  <TextInput
                    id="lastName"
                    placeholder="Familiya"
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
                <div className="flex items-center gap-2 cursor-pointer">
                  <Checkbox id="remember" className="cursor-pointer" />
                  <Label htmlFor="remember">Remember me</Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-cyan-700 hover:underline dark:text-cyan-500"
                  onClick={() => alert("Forgot passworddi qilishshi unuttin")}
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

      {/* ============================================ VERIFY MODAL */}
      {verifyModal && (
        <Modal
          show={verifyModal}
          size="md"
          popup
          onClose={() => {
            setVerifyModal(false);
            setTimeLeft(180);
          }}
          initialFocus={emailInputRef}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Emailingizga yuborilgan kodni kiriting
              </h3>
              <h2 className="w-full text-center text-xl">
                {formatTime(timeLeft)}
              </h2>
              <div>
                <Label
                  htmlFor="email"
                  value="Your email"
                  className="mb-2 block"
                />
                <TextInput
                  id="email"
                  ref={emailInputRef}
                  placeholder="name@company.com"
                  value={verifyData.email}
                  onChange={handleVerifyInputChange}
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="otp"
                  value="Tastiqlash kodi"
                  className="mb-2 block"
                />
                <TextInput
                  id="otp"
                  type="password"
                  placeholder="Tastiqlash kodini kiriting"
                  value={verifyData.otp}
                  onChange={handleVerifyInputChange}
                  required
                />
              </div>
              <Button className="w-full" onClick={verifySubmit}>
                Yuborish
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default SignInModal;
