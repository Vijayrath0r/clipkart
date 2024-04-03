import FestivalCard from "./FestivalCard";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const FestivalSpecialContainer = () => {
  return (
    <div className="flex h-[800px] my-2 bg-white">
      <div className="w-1/3 h-full">
        <div className="flex justify-between">
          <div className="text-[20px] font-medium p-5 h-[10%]">
            Festive Specials, Just For You!
          </div>
          <div className="p-5">
            <IoIosArrowDroprightCircle size={30} style={{ color: "#2a55e5" }} />
          </div>
        </div>
        <div className="w-full h-full h-[90%]">
          <FestivalCard />
          <FestivalCard />
          <FestivalCard />
          <FestivalCard />
        </div>
      </div>
      <div className="w-2/3 h-full">
        <img className="h-full" src="/festivalside.jpg" alt="" />
      </div>
    </div>
  );
};
export default FestivalSpecialContainer;
