import { Link } from "react-router-dom";
import FestivalCard from "./FestivalCard";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FestivalSpecialContainer = () => {
  // List of products to be displayed
  const prodList = [
    { productName: "Shoes", productImage: "prod1.webp" },
    { productName: "Watch", productImage: "prod2.webp" },
    { productName: "Shirt", productImage: "prod3.webp" },
    { productName: "Pants", productImage: "prod4.webp" },
  ];

  return (
    <div className="flex flex-col md:flex-row h-auto my-2 bg-white">
      {/* Left section: title and product cards */}
      <div className="md:w-1/3 h-full">
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
              key={product.productName}
              productName={product.productName}
              productImage={product.productImage}
            />
          ))}
        </div>
      </div>

      {/* Right section: promotional image */}
      <div className="md:w-2/3 h-auto">
        <img className="h-full w-full object-cover" src="/festivalside.webp" alt="Festival Special" />
      </div>
    </div>
  );
};

export default FestivalSpecialContainer;
