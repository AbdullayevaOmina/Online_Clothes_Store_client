import { addToCartIcon, likeIcon, starIcon } from "@icons";
import { useProductStore } from "@store";
import { getDataFromCookie } from "@token-service";
import { useEffect } from "react";

const SingleProduct = () => {
  const id = getDataFromCookie("id");
  const { get, productData, isLoading } = useProductStore();

  useEffect(() => {
    if (id) get(id);
  }, [id, get]);

  const { image_url, product_name, cost, description } = productData;

  return (
    <div className="flex h-screen w-screen pt-16 bg-white dark:bg-gray-900 antialiased">
      {isLoading ? (
        <div className="flex justify-center items-center w-full h-full">
          Loading...
        </div>
      ) : (
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
            <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
              {image_url && image_url.length > 0 && (
                <img
                  className="w-[500px]"
                  src={image_url[0]}
                  alt={product_name}
                />
              )}
            </div>
            <div className="mt-6 sm:mt-8 lg:mt-0">
              <h1 className="text-3xl font-semibold text-gray-900 sm:text-5xl dark:text-white">
                {product_name}
              </h1>
              <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                  ${cost}
                </p>
                <div className="flex items-center gap-2 mt-2 sm:mt-0">
                  <div className="flex items-center gap-1">
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                  </div>
                  <p className="text-sm font-medium leading-none text-gray-500 dark:text-gray-400">
                    (5.0)
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium leading-none text-gray-900 underline hover:no-underline dark:text-white"
                  >
                    345 Reviews
                  </a>
                </div>
              </div>
              <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                <button className="flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                  {likeIcon} Add to favorites
                </button>
                <button className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center">
                  {addToCartIcon} Add to cart
                </button>
              </div>
              <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
              <p className="mb-6 text-gray-500 dark:text-gray-400">
                {description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
