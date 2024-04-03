import ProductSwiper from "../productswiper/ProductSwiper";

const TopDeals = () => {
  return (
    <div className="bg-white my-4">
      <div className="text-[20px] font-medium p-5">Top Deals</div>
      <div className="p-5">
        <ProductSwiper />
      </div>
    </div>
  );
};
export default TopDeals;
