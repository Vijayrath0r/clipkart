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
      <div className="flex my-1 p-3 bg-white">
        <div className="w-1/3">
          <ProductImageBlock productImages={product.images} />
          <div className="flex">
            <div className="w-1/6"></div>
            <div className="w-5/6 text-white">
              <Link
                to="/viewcart"
                className="inline-block w-5/12 bg-[#ff9f00] m-1 p-5 text-center"
                onClick={() => handleAddToCard(product)}
              >
                <IoCart style={{ display: "inline", padding: "1px" }} />
                <span>Go To cart</span>
              </Link>
              <Link
                to="/viewcart"
                className="inline-block w-5/12 bg-[#fb641b] m-1 p-5 text-center"
                onClick={() => handleAddToCard(product)}
              >
                <AiFillThunderbolt
                  style={{ display: "inline", padding: "1px" }}
                />
                <span>Buy now</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/3 p-2 ml-5">
          <div className=" text-[22px]">{product.title}</div>
          <div className="inline-block bg-green-700 text-[12px] text-white p-1 rounded-xl">
            {product.rating}
            <MdOutlineStar style={{ display: "inline", marginLeft: "3px" }} />
          </div>
          <div className="inline-block text-[15px] text-gray-400 p-1 ml-2">
            21,508 Ratings & 1,486 Reviews
          </div>
          <div className="flex items-end">
            <div className="font-medium text-[22px]">${product.price}</div>
            <div className="flex">
              <div className="text-[16px] line-through text-gray-500 ml-2">
                $
                {parseInt(
                  product.price / (1 - product.discountPercentage / 100)
                )}
              </div>
              <div className="text-[12px] font-medium text-green-800 p-1 ml-2">
                {product.discountPercentage} % off
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
      <div className="flex bg-white">More Product Details</div>
      <BestDeals />
      <RecentlyVisitedContainer />
    </>
  );
};

export default ProductDetails;
