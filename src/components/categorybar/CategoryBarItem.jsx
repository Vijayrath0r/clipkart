import { Link } from "react-router-dom";

const CategoryBarItem = ({ itemImage, ItemName }) => {
  return (
    <Link
      to="/products"
      className="p-4 m-2 hover:scale-110 transition-all duration-500"
    >
      <img
        className="m-auto min-w-[80px]"
        src={"/categoryItem/" + itemImage}
        alt="Temp"
      />
      <span className="font-medium">{ItemName}</span>
    </Link>
  );
};

export default CategoryBarItem;
