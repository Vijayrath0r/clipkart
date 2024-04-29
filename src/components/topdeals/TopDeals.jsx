import { Link } from "react-router-dom";
import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import useFetch from "../../hooks/useFetch";
const TopDeals = () => {
  const { data } = useFetch("http://localhost:3002/product/getProducts", "POST", {
    category: "smartphones",
    limit: 9
  });
  return (
    <div className="bg-white my-4">
      <div className="flex justify-between">
        <div className="text-[20px] font-medium p-5">Top Deals</div>
        <Link to="/products" className="p-5">
          <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
        </Link>
      </div>
      {data &&
        <div className="p-5">
          <ProductSwiper key={"bestDealsSwiper"} productList={data.productData} />
        </div>
      }
    </div>
  );
};
export default TopDeals;
