import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLikeStore } from "@store";
import { getDataFromCookie } from "@token-service";
import { ProductCard } from "@ui";

const LikesProduct = () => {
  const { getLikes, data, isLoader } = useLikeStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!getDataFromCookie("user_id")) {
      navigate("/");
    } else if (getDataFromCookie("user_id")) {
      getLikes();
    }
  }, []);

  return (
    <>
      <div className="flex gap-10 items-center mt-16">
        <h1 className="mx-10 mt-5 text-2xl">Products</h1>
      </div>
      {!isLoader ? (
        <div className="flex justify-center w-full mx-10 my-5">
          <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {data.map((product, _) => (
              <ProductCard key={_} {...product} />
            ))}
          </div>
        </div>
      ) : (
        <h1 className=" text-center  text-2xl text-gray-500 my-5">
          Loading...
        </h1>
      )}
    </>
  );
};

export default LikesProduct;
