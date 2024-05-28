import { Tooltip } from "flowbite-react";
import { likeIcon } from "@icons";

const LikesProduct = () => {
  return (
    <div>
      <Tooltip
        className="bg-gray-500 text-white dark:bg-gray-700"
        content="Saralanganlar"
        placement="bottom"
      >
        <button>{likeIcon}</button>
      </Tooltip>
    </div>
  );
};

export default LikesProduct;
