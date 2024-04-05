import ProductListItem from "./ProductListItem";

const ProductList = ({ productList }) => {
  return (
    <>
      {productList.map((product) => (
        <ProductListItem key={product.id} productData={product} />
      ))}
    </>
  );
};
export default ProductList;
