import { FaExclamationCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeProductFromCart } from "../../actions/productActions";
import { useState } from "react";
const ProductOfCartItem = ({ product }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const handleRemoveFromCart = (product) => {
    dispatch(removeProductFromCart({ product }));
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      <div className="flex m-2 p-3">
        <div className="w-1/6">
          <img src={product.thumbnail} alt="" />
        </div>
        <div className="w-3/6 px-3">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                {product.title}{product.colorType & ` (${product.colorType}, ${product.storageType})`}
              </div>
              <div className="text-gray-400">{product.ram ? product.ram : 8}GB RAM</div>
              <div className="text-gray-400 my-2">
                <span>Saller: {product.saller ? product.saller : "Flipcart"}</span>
              </div>
            </div>
            <div>
              <span className="line-through text-gray-400">
                ${product.price}
              </span>
              <span className="mx-2">${product.price}</span>
              <span className="text-green-600">
                {product.discountPersent ? product.discountPersent : 10}% Off
              </span>
              <span className="text-green-700 text-sm ml-2">
                {product.appliedOffers} Offer Applied{" "}
                <FaExclamationCircle style={{ display: "inline" }} />
              </span>
              <div>
                +${product.securePackagingFee ? product.securePackagingFee : 2} Secured Packaging Fee{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/6 text-right">
          <span>Delivery by 11,Apr</span>
          <span className="border divide-x-0 mx-1"></span>
          <span>
            <span className="line-through">$1</span>
            <span className="text-green-600"> Free</span>
          </span>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex">
          <button className="border text-[22px] px-3 rounded-full" onClick={handleDecrement}>-</button>
          <input
            className="border m-1 p-1 w-12 text-center"
            type="text"
            value={quantity}
            readOnly
          />
          <button className="border text-[22px] px-3 rounded-full" onClick={handleIncrement}>+</button>
        </div>
        <div className="p-3 hover:text-blue-500 font-medium">
          <Link>SAVE AND LATER</Link>
        </div>
        <div className="p-3 hover:text-blue-500 font-medium">
          <Link onClick={() => handleRemoveFromCart(product)}>REMOVE</Link>
        </div>
      </div>
    </>
  );
};
export default ProductOfCartItem;
