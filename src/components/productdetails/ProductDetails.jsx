import { useDispatch } from "react-redux";
import { MdOutlineStar } from "react-icons/md";
import { IoCart } from "react-icons/io5";
import { AiFillThunderbolt } from "react-icons/ai";

import ExchangeBlock from "./ExchangeBlock";
import ProductImageBlock from "./ProductImageBlock";
import ProductOfferBlock from "./ProductOfferBlock";
import ProductTypeBlock from "./ProductTypeBlock";
import BestDeals from "../bestdeals/BestDeals";
import RecentlyVisitedContainer from "../recentlyvisited/RecentlyVisitedContainer";
import { addProductToCart } from '../../actions/productActions';
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { data } = useFetch("http://localhost:3002/product/getProduct", "POST", { productId });
  const product = data && data.productData;

  if (!product) {
    return null; // If product is null, return null to render nothing
  }

  const handleAddToCard = (product) => {
    dispatch(addProductToCart({ product }));
  };

  return (
    <>
      <div className="flex flex-col md:flex-row my-1 p-3 bg-white">
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <ProductImageBlock productImages={product.images} />
          <div className="flex justify-center md:justify-start mt-4">
            <Link
              to="/viewcart"
              className="inline-block w-5/12 md:w-5/12 bg-[#ff9f00] m-1 p-3 text-center"
              onClick={() => handleAddToCard(product)}
            >
              <IoCart className="inline mb-1" />
              <span>Go To Cart</span>
            </Link>
            <Link
              to="/viewcart"
              className="inline-block w-5/12 md:w-5/12 bg-[#fb641b] m-1 p-3 text-center"
              onClick={() => handleAddToCard(product)}
            >
              <AiFillThunderbolt className="inline mb-1" />
              <span>Buy Now</span>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/3 p-2 ml-0 md:ml-5">
          <div className="text-[18px] md:text-[22px]">{product.title}</div>
          <div className="flex items-center mt-2">
            <div className="inline-block bg-green-700 text-[12px] text-white p-1 rounded-xl">
              {product.rating}
              <MdOutlineStar className="inline ml-1" />
            </div>
            <div className="inline-block text-[12px] md:text-[15px] text-gray-400 p-1 ml-2">
              21,508 Ratings & 1,486 Reviews
            </div>
          </div>
          <div className="flex items-end mt-4">
            <div className="font-medium text-[18px] md:text-[22px]">${product.price}</div>
            <div className="flex ml-2">
              <div className="text-[14px] md:text-[16px] line-through text-gray-500">
                ${parseInt(product.price / (1 - product.discountPercentage / 100))}
              </div>
              <div className="text-[12px] font-medium text-green-800 p-1 ml-2">
                {product.discountPercentage}% off
              </div>
            </div>
          </div>
          <div className="my-2">
            <ProductOfferBlock />
          </div>
          <ExchangeBlock productPrice={product.price} />
          <ProductTypeBlock productImages={product.images} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-white p-3">
        More Product Details
      </div>
      <BestDeals />
      <RecentlyVisitedContainer />
    </>
  );
};

export default ProductDetails;
