const FestivalCard = () => {
  return (
    <div className="inline-block h-[45%] w-[45%] border border-solid rounded-2xl m-2 p-5">
      <img src="/productItem.webp" alt="" />
      <div className="text-[24px]">Product name</div>
      <div className="text-[20px] text-green-900">Min 30% Off</div>
    </div>
  );
};
export default FestivalCard;
