import { Link } from "react-router-dom";
import FestivalCard from "./FestivalCard";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FestivalSpecialContainer = () => {
  const prodList = [
    { productName: "Shoes", productImage: "prod1.webp" },
    { productName: "Watch", productImage: "prod2.webp" },
    { productName: "Shirt", productImage: "prod3.webp" },
    { productName: "Pants", productImage: "prod4.webp" },
  ];
  return (
    <div className="flex h-[800px] my-2 bg-white">
      <div className="w-1/3 h-full">
        <div className="flex justify-between">
          <div className="text-[20px] font-medium p-5 h-[10%]">
            Festive Specials, Just For You!
          </div>
          <Link to="/products" className="p-5">
            <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
          </Link>
        </div>
        <div className="w-full h-full h-[90%]">
          {prodList.map((product) => (
            <FestivalCard
              productName={product.productName}
              productImage={product.productImage}
            />
          ))}
        </div>
      </div>
      <div className="w-2/3 h-full">
        <img className="h-full" src="/festivalside.webp" alt="" />
      </div>
    </div>
  );
};
export default FestivalSpecialContainer;
