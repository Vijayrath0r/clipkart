import { Link } from "react-router-dom";
import ProductSwiper from "../productswiper/ProductSwiper";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const TopDeals = () => {
  const productList = [
    { productName: "phone 4", productImage: "phone4.webp" },
    { productName: "phone 5", productImage: "phone5.webp" },
    { productName: "phone 6", productImage: "phone6.webp" },
    { productName: "phone 1", productImage: "phone1.webp" },
    { productName: "phone 2", productImage: "phone2.webp" },
    { productName: "phone 3", productImage: "phone3.webp" },
    { productName: "phone 4", productImage: "phone4.webp" },
    { productName: "phone 5", productImage: "phone5.webp" },
    { productName: "phone 6", productImage: "phone6.webp" },
  ];
  return (
    <div className="bg-white my-4">
      <div className="flex justify-between">
        <div className="text-[20px] font-medium p-5">Top Deals</div>
        <Link to="/products" className="p-5">
          <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
        </Link>
      </div>
      <div className="p-5">
        <ProductSwiper productList={productList} />
      </div>
    </div>
  );
};
export default TopDeals;
