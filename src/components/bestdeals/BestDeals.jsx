import { Link } from "react-router-dom";
import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useFetch from "../../hooks/useFetch";

const BestDeals = () => {
  const { data } = useFetch("http://localhost:3002/product/getProducts", "POST", {
    category: "smartphones",
    limit: 9
  });
  return (
    <>
      <div className="flex h-auto my-5">
        <div className="w-5/6 h-auto bg-white">
          <div className="flex justify-between">
            <div className="text-[20px] font-medium p-5">
              Best Deals on Smartphones
            </div>
            <Link to="/products" className="p-5">
              <IoIosArrowDroprightCircle
                size={30}
                style={{ color: "#2a55e5" }}
              />
            </Link>
          </div>
          {data &&
            <div className="p-5">
              <ProductSwiper key={"bestDealsSwiper"} productList={data.productData} />
            </div>
          }
        </div>
        <div className="w-1/6 h-96">
          <img src="/flightcoupon.webp" alt="" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};
export default BestDeals;
