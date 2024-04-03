const FestivalCard = ({ productName, productImage }) => {
  return (
    <div className="inline-block h-[45%] w-[45%] border border-solid rounded-2xl m-2 p-5">
      <div className="h-[80%] flex items-center">
        <img src={"/product/" + productImage} alt="" />
      </div>
      <div className="text-[24px] h-10%">{productName}</div>
      <div className="text-[20px] text-green-900 h-[10%]">Min 30% Off</div>
    </div>
  );
};
export default FestivalCard;
