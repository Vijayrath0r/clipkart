import useFetch from "../../hooks/useFetch";
import DashboardProductItem from "./DashboardProductItem";
const DashboardProducts = () => {
  const { data } = useFetch("http://localhost:3002/product/stockList", "POST", {
    tenant: "vijayorg",
  });
  return (
    <div className="flex">
      {data
        ? data.productList.map((product) => (
            <DashboardProductItem key={product.stock_id} product={product} />
          ))
        : "this is loading"}
    </div>
  );
};
export default DashboardProducts;
