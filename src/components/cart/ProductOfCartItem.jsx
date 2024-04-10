import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const ProductOfCartItem = ({ product }) => {
  return (
    <>
      <div className="flex m-2 p-3">
        <div className="w-1/6">
          <img src={product.image} alt="" />
        </div>
        <div className="w-3/6 px-3">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap">
                {product.productName}({product.colorType}, {product.storageType}
                )
              </div>
              <div className="text-gray-400">{product.ram}GB RAM</div>
              <div className="text-gray-400 my-2">
                <span>Saller:{product.saller}</span>
              </div>
            </div>
            <div>
              <span className="line-through text-gray-400">
                &#8377;{product.actualPrice}
              </span>
              <span className="mx-2">&#8377;{product.discountedPrice}</span>
              <span className="text-green-600">
                {product.discountPersent}% Off
              </span>
              <span className="text-green-700 text-sm ml-2">
                {product.appliedOffers} Offer Applied{" "}
                <FaExclamationCircle style={{ display: "inline" }} />
              </span>
              <div>
                +&#8377;{product.securePackagingFee} Secured Packaging Fee{" "}
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
          <button className="border text-[22px] px-3 rounded-full">-</button>
          <input
            className="border m-1 p-1 w-12 text-center"
            type="text"
            value={0}
          />
          <button className="border text-[22px] px-3 rounded-full">+</button>
        </div>
        <div className="p-3 hover:text-blue-500 font-medium">
          <Link>SAVE AND LATER</Link>
        </div>
        <div className="p-3 hover:text-blue-500 font-medium">
          <Link>REMOVE</Link>
        </div>
      </div>
    </>
  );
};
export default ProductOfCartItem;
