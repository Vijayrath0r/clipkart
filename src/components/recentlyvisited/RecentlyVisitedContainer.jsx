import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const RecentlyVisitedContainer = () => {
  const productList = [
    { productName: "phone 6", productImage: "phone6.webp" },
    { productName: "phone 1", productImage: "phone1.webp" },
  ];
  return (
    <div className="bg-white my-4">
      <div className="flex justify-between">
        <div className="text-[20px] font-medium p-5">Recently Viewed</div>
        <div className="p-5">
          <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
        </div>
      </div>
      <div className="p-5 h-[360px]">
        <ProductSwiper productList={productList} />
      </div>
    </div>
  );
};
export default RecentlyVisitedContainer;
