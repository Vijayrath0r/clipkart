import { Link } from "react-router-dom";

const ProductSwiperItem = ({ productName, productImage }) => {
  return (
    <Link
      to="/product"
      className="flex flex-col border border-solid rounded-2xl w-full h-max"
    >
      <img
        class="p-8 rounded-t-lg"
        src={"/product/" + productImage}
        alt="product image"
      />
      <span className="text-center">{productName}</span>
      <span className="text-center font-medium">incl of offers</span>
    </Link>
  );
};
export default ProductSwiperItem;
