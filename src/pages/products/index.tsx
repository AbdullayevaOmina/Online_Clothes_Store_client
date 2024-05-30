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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-7">
            {dataAll.map((product) => (
              <ProductCard key={product.product_id} {...product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
