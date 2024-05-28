import { setDataToCookie } from "@token-service";
import { useProductStore } from "@store";
import { useEffect, useState } from "react";
import { ProductCard } from "@ui";
const index = () => {
  const { getAll, dataAll, isLoading } = useProductStore();
  const [params, setParams] = useState({
    limit: 8,
    page: 1,
  });

  useEffect(() => {
    getAll({
      limit: 8,
      page: 1,
    });
  }, [params]);

  console.log(dataAll);

  return (
    <div>
      {isLoading ? "landing...." : <h1>Products</h1>}
      <ProductCard />
    </div>
  );
};

export default index;
