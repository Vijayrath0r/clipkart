import ProductList from "./ProductList";
import ProductsFilter from "./ProductsFilter";

const ProductsContainer = ({ productList }) => {
  console.log(productList);
  return (
    <div className="flex mx-20 my-3">
      <div className="inline-block m-2 w-1/6 bg-white">
        <ProductsFilter />
      </div>
      <div className="inline-block m-2 w-5/6 bg-white">
        <ProductList productList={productList} />
      </div>
    </div>
  );
};
export default ProductsContainer;
