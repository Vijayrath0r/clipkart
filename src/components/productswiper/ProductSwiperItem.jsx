import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addProductToRecentlyVisited } from '../../actions/productActions';

const ProductSwiperItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleProductClick = (product) => {
    dispatch(addProductToRecentlyVisited({ product }));
    // Handle navigation to product details page
  };
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex flex-col border border-solid rounded-2xl w-full h-max"
      onClick={() => handleProductClick(product)}
    >
      <img
        className="p-8 rounded-t-lg object-contain"
        style={{ aspectRatio: "3/4" }}
        src={product.thumbnail}
        alt="product image"
      />
      <span className="text-center">{product.title}</span>
      <span className="text-center font-medium">incl of offers</span>
    </Link>
  );
};
export default ProductSwiperItem;
