import React, { useState, useEffect } from "react";
import { Card } from "flowbite-react";
import { addToCartIcon, likeIcon, likeIconSolid, starIcon } from "@icons";
import { setDataToCookie } from "@token-service";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "@store"; // Ensure the path is correct
import { ProductCardProps } from "@products-interface";

const ProductCard: React.FC<ProductCardProps> = ({
  product_id,
  product_name,
  cost,
  image_url,
  description,
  discount,
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
  const price = (cost / 100) * (100 - discount);
  
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
    <Card
      className="max-w-sm relative  hover:scale-105 hover:shadow-lg transition-transform"
      imgAlt={product_name}
      imgSrc={image_url[0]}
    >
      <div>
        <span
          onClick={handlePage}
          className="text-lg font-semibold leading-tight text-gray-900 cursor-pointer hover:underline dark:text-white"
        >
          {product_name}
        </span>
        <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
          {description.slice(0, 100)}...
        </p>
      </div>

      <div>
        <p className="text-lg font-bold text-gray-900 dark:text-white">
          <span className="line-through"> ${cost} </span>
        </p>
        <p className="text-lg font-bold leading-tight text-green-600 dark:text-green-500">
          ${price}
        </p>
      </div>

      <div className="flex items-center justify-end gap-5 mt-4 absolute bottom-6 right-8">
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
