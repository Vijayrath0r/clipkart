import { Link } from "react-router-dom";
import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { useSelector } from "react-redux";
const RecentlyVisitedContainer = () => {
  const recentlyVisited = useSelector((state) => state.products.recentlyVisited);
  if (recentlyVisited.length < 1) {
    return null;
  }
  return (
    <div className="bg-white my-4 h-auto">
      <div className="flex justify-between">
        <div className="text-[20px] font-medium p-5">Recently Viewed</div>
        <Link to="/products" className="p-5">
          <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
        </Link>
      </div>
      <div className="p-5">
        <ProductSwiper productList={recentlyVisited} />
      </div>
    </div>
  );
};
export default RecentlyVisitedContainer;
