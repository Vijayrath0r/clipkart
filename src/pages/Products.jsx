import ProductsContainer from "../components/products/ProductsContainer";
import ProductsLoading from "../components/products/ProductsLoading";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const { data } = useFetch("http://localhost:3002/product/getProducts", "POST", {
    category: "all",
    limit: -1
  });
  const productList = data && data.productData;
  return (
    <div className="w-full">
      {productList && productList.length > 0 ? (
        <ProductsContainer productList={productList} />
      ) : (
        <ProductsLoading />
      )}
    </div>
  );
};
export default Products;
