const CategoryBarItem = ({ itemImage, ItemName }) => {
  return (
    <div className="p-4 m-2">
      <img className="m-auto min-w-[80px]" src={"/categoryItem/" + itemImage} alt="Temp" />
      <span className="font-medium">{ItemName}</span>
    </div>
  );
};

export default CategoryBarItem;
