import { cartIcon } from "@icons";
import { Tooltip } from "flowbite-react";

const Cart = () => {
  return (
    <div>
      <Tooltip
        className="bg-gray-500 text-white dark:bg-gray-700"
        content="Savat"
        placement="bottom"
      >
        <button>{cartIcon}</button>
      </Tooltip>
    </div>
  );
};

export default Cart;
