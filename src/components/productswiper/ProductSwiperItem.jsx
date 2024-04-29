import { Link } from "react-router-dom";

const ProductSwiperItem = ({ productId, productName, productImage }) => {
  return (
    <Link
      to={`/product/${productId}`}
      className="flex flex-col border border-solid rounded-2xl w-full h-max"
    >
      <img
        className="p-8 rounded-t-lg object-contain"
        style={{ aspectRatio: "3/4" }}
        src={productImage}
        alt="product image"
      />
      <span className="text-center">{productName}</span>
      <span className="text-center font-medium">incl of offers</span>
    </Link>
  );
};
export default ProductSwiperItem;
