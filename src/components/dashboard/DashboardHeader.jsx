import { Link } from "react-router-dom";

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="text-xl">DashBoard</div>
      <div>
        <Link className="mx-1 px-8 py-3 text-white bg-[#6989bb]">
          Add Stock
        </Link>
        <Link className="mx-1 px-8 py-3 text-white bg-[#51ab85] relative">
          <span>Orders</span>
          <span className="bg-yellow-500 rounded p-1 absolute -top-3 -right-2">
            5
          </span>
        </Link>
      </div>
    </div>
  );
};
export default DashboardHeader;
