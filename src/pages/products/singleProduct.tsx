import { ProductSkeleton } from "@ui";
import { addToCartIcon, likeIcon, starIcon } from "@icons";
import { useProductStore } from "@store";
import { getDataFromCookie } from "@token-service";
import { useEffect } from "react";

const SingleProduct = () => {
  const id = getDataFromCookie("id");
  const { get, productData } = useProductStore();

  useEffect(() => {
    if (id) get(id);
  }, [id, get]);

  const { image_url, product_name, cost, description, discount } = productData;

  return (
    <>
      <section className="py-8 mt-16 bg-white md:py-16 dark:bg-gray-900 antialiased">
        {image_url === undefined ? (
          <ProductSkeleton />
        ) : (
          <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
              <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                <img className="w-full " src={image_url[0]} />
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-0">
                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                  {product_name}
                </h1>
                <div className="mt-4 sm:items-center sm:gap-8 sm:flex">
                  <p className="text-2xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    <span className="line-through"> ${cost} </span>
                  </p>
                  <p className="text-2xl font-extrabold text-green-600 sm:text-3xl">
                    ${(cost / 100) * (100 - discount)}
                  </p>

                  <div className="flex items-center gap-2 mt-2 sm:mt-0">
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
                    {starIcon}
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
                    {likeIcon} <span className="px-3">Add to favorites</span>
                  </button>

                  <button className="text-white mt-4 sm:mt-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 flex items-center justify-center">
                    {addToCartIcon}
                    <span className="px-3">Add to cart</span>
                  </button>
                </div>

                <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />

                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  {description}
                </p>

                <p className="mb-6 text-gray-500 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
                  vel magnam, inventore nobis necessitatibus natus velit,
                  suscipit enim, veniam a molestias. Voluptates veniam incidunt
                  esse tenetur maiores ex beatae deleniti dolorum commodi!
                  Maxime repellendus natus aliquam consequatur repellat
                  distinctio dolorem, a placeat aperiam non quam? Eos aliquam
                  neque amet, distinctio beatae iusto illum tempore dicta itaque
                  repellendus voluptatem quod fuga debitis velit consequuntur,
                  cumque doloribus saepe nesciunt, rem dolorem corporis
                  aspernatur earum reprehenderit. Debitis consequatur quisquam
                  libero quibusdam harum! Sequi.
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default SingleProduct;
