import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const RecentlyVisitedContainer = () => {
  return (
    <div className="bg-white my-4">
      <div className="flex justify-between">
        <div className="text-[20px] font-medium p-5">Recently Viewed</div>
        <div className="p-5">
          <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
        </div>
      </div>
      <div className="p-5">
        <ProductSwiper />
      </div>
    </div>
  );
};
export default RecentlyVisitedContainer;
