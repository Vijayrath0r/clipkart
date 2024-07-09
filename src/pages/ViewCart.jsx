import { Link } from "react-router-dom";
import AddressForCart from "../components/cart/AddressForCart";
import PriceDetails from "../components/cart/PriceDetails";
import ProductsOfCart from "../components/cart/ProductsOfCart";

const ViewCart = () => {
  return (
    <div className="flex flex-col md:flex-row p-3">
      <div className="hidden md:block md:w-1/6"></div>
      <div className="w-full md:w-2/3 mb-3">
        <AddressForCart />
        <ProductsOfCart />
        <div className="flex justify-end bg-white p-5 mr-3">
          <Link to="/checkout" className="bg-[#fb641b] text-white px-8 py-3 active:scale-105">
            PLACE ORDER
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <PriceDetails />
      </div>
      <div className="hidden md:block md:w-1/6"></div>
    </div>
  );
};

export default ViewCart;
