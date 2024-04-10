import { Link } from "react-router-dom";
import AddressForCart from "../components/cart/AddressForCart";
import PriceDetails from "../components/cart/PriceDetails";
import ProductsOfCart from "../components/cart/ProductsOfCart";

const ViewCart = () => {
  return (
    <div className="flex p-3">
      <div className="w-1/6"></div>
      <div className="w-3/6">
        <AddressForCart />
        <ProductsOfCart />
        <div className="flex justify-end bg-white p-5 mr-3">
          <Link className="bg-[#fb641b] text-white px-8 py-3 active:scale-105">
            PLACE ORDER
          </Link>
        </div>
      </div>
      <div className="w-1/6">
        <PriceDetails />
      </div>
      <div className="w-1/6"></div>
    </div>
  );
};
export default ViewCart;
