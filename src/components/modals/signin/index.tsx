import { userIcon } from "@icons";
import { Tooltip } from "flowbite-react";

const SignInModal = () => {
  return (
    <div>
      <Tooltip
        className="bg-gray-500 text-white dark:bg-gray-700"
        content="Roy'xatdan o'tish"
        placement="bottom"
      >
        <button>{userIcon}</button>
      </Tooltip>
    </div>
  );
};

export default SignInModal;
