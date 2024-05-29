import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { addToCartIcon, likeIcon, likeIconSolid, starIcon } from "@icons";
import { setDataToCookie } from "@token-service";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@store"; // Ensure the path is correct

interface ProductCardProps {
  product_id: string;
  product_name: string;
  cost: number;
  image_url: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({
  product_id,
  product_name,
  cost,
  image_url,
}) => {
  const navigate = useNavigate();
  const {
    cart,
    liked,
    getCartData,
    getLikedData,
    addToCart,
    removeFromCart,
    addToLiked,
    removeFromLiked,
  } = useCartStore();
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    getCartData();
    getLikedData();
  }, [getCartData, getLikedData]);

  useEffect(() => {
    setIsLiked(liked.includes(product_id));
    setIsInCart(cart.includes(product_id));
  }, [liked, cart, product_id]);

  const handlePage = () => {
    setDataToCookie("id", product_id);
    navigate(`/product/${product_id}`);
    window.location.reload();
  };

  const handleLike = () => {
    if (isLiked) {
      removeFromLiked(product_id);
    } else {
      addToLiked(product_id);
    }
    setIsLiked(!isLiked);
  };

  const handleAddToCart = () => {
    if (isInCart) {
      removeFromCart(product_id);
    } else {
      addToCart(product_id);
    }
    setIsInCart(!isInCart);
  };

  return (
    <Card className="max-w-sm" imgAlt={product_name} imgSrc={image_url[0]}>
      <div onClick={handlePage} className="cursor-pointer">
        <h5 className="text-xl hover:text-sky-600 font-semibold tracking-tight text-gray-900 dark:text-white">
          {product_name}
        </h5>
        <div className="mb-5 mt-2.5 flex items-center">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <span key={i}>{starIcon}</span>
            ))}
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            5.0
          </span>
        </div>
        <div className="text-lg font-semibold text-gray-900 dark:text-white">
          💲{cost}
        </div>
      </div>

      <div className="flex items-center justify-end gap-5 mt-4">
        <button onClick={handleLike}>
          {isLiked ? likeIconSolid : likeIcon}
        </button>
        <button
          onClick={handleAddToCart}
          className={isInCart ? "text-green-500" : ""}
        >
          {addToCartIcon}
        </button>
      </div>
    </Card>
  );
};

export default ProductCard;
