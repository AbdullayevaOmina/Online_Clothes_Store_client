import { useProductStore } from "@store";
import { useEffect, useState } from "react";
import { ProductCard } from "@ui";
import { UiCategory } from "@components";

const Index: React.FC = () => {
  const { getAll, dataAll, isLoading } = useProductStore();
  const [params, setParams] = useState({
    limit: 20,
    page: 1,
  });

  useEffect(() => {
    getAll(params);
  }, [params]);

  return (
    <div>
      {isLoading ? (
        "Landing...."
      ) : (
        <>
          <div className="flex gap-10 items-center">
            <h1 className="my-5 text-2xl">Products</h1>
            <UiCategory />
          </div>
          <div className=" flex justify-center w-full">
            <div className="grid py-[10px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {dataAll.map((product) => (
                <ProductCard key={product.product_id} {...product} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
