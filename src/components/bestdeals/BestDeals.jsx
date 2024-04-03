import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const BestDeals = () => {
  return (
    <>
      <div className="flex h-96 my-5">
        <div className="w-5/6 h-96 bg-white">
          <div className="flex justify-between">
            <div className="text-[20px] font-medium p-5">
              Best Deals on Smartphones
            </div>
            <div className="p-5">
              <IoIosArrowDroprightCircle
                size={45}
                style={{ color: "#2a55e5" }}
              />
            </div>
          </div>
          <div className="p-5">
            <ProductSwiper />
          </div>
        </div>
        <div className="w-1/6 h-96">
          <img src="/flightcoupon.webp" alt="" className="h-full w-full" />
        </div>
      </div>
    </>
  );
};
export default BestDeals;
