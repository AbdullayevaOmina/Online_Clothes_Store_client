import { useLikeStore } from "@store";
import { likeIcon, likeIconSolid } from "@icons";
import { useState } from "react";
import { getDataFromCookie } from "@token-service";
import { toast } from "react-toastify";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const { postLike, getLikes } = useLikeStore();

  const handleLike = async () => {
    const id = getDataFromCookie("user_id");
    if (id) {
      const like = await postLike(id);
      if (like === true) {
        setIsLiked(like);
        toast.success("was included in the list");
        getLikes();
      } else if (like == false) {
        toast.info("removed from the list");
        getLikes();
      }
    } else {
      toast.info("Siz hali ro'yxatdan o'tmagansiz");
    }
  };

  return (
    <>
      <button onClick={handleLike}>{isLiked ? likeIconSolid : likeIcon}</button>
    </>
  );
};

export default LikeButton;
