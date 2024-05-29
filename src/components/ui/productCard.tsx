import React from "react";
import { Card } from "flowbite-react";
import { addToCartIcon, likeIcon, starIcon } from "@icons";
import { setDataToCookie } from "@token-service";
import { useNavigate } from "react-router-dom";

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
  function handlePage() {
    setDataToCookie("id", product_id);
    navigate(`/product/:${product_id}`);
    window.location.reload();
  }

  return (
    <Card className="max-w-sm " imgAlt={product_name} imgSrc={image_url[0]}>
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
        <button className="">{likeIcon}</button>
        <button className="">{addToCartIcon}</button>
      </div>
    </Card>
  );
};

export default ProductCard;
