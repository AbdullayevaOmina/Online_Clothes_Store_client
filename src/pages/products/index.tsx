import { useProductStore } from "@store";
import { useEffect, useState } from "react";
import { ProductCard } from "@ui";

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
          <h1 className="my-5 text-2xl">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
