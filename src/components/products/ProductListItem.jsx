import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

const ProductListItem = ({ productData }) => {
  return (
    <>
      <Link to={`/product/${productData.id}`} className="flex flex-col md:flex-row h-auto md:h-[250px] p-5">
        <div className="md:w-3/12 flex justify-center mb-4 md:mb-0">
          <img
            className="h-[200px] md:h-[100%] rounded-3xl"
            src={productData.thumbnail}
            alt={productData.title}
          />
        </div>
        <div className="w-full md:w-6/12 p-3 flex flex-col justify-between">
          <div>
            <div className="font-medium text-[15px] md:text-[22px]">{productData.title}</div>
            <div className="inline-block bg-green-700 text-[15px] text-white p-1 rounded-xl mt-2 md:mt-0">
              {productData.rating}
              <MdOutlineStar className="inline ml-1" />
            </div>
            <div className="inline-block text-[15px] text-gray-400 p-1 hidden md:block">
              21,508 Ratings & 1,486 Reviews
            </div>
          </div>
          <div className="text-[13px] mt-3 md:mt-0 text-gray-600">
            <ul className="list-disc ml-5">
              <li>128 GB ROM</li>
              <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
              <li>48MP + 12MP | 12MP Front Camera</li>
              <li>A16 Bionic Chip, 6 Core Processor</li>
              <li>1 Year Warranty for Phone and 6 Months Warranty for In-Box Accessories</li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-3/12 p-3 flex flex-col justify-between">
          <div className="font-medium text-[15px] md:text-[22px]">${productData.price}</div>
          <div className="flex items-center mt-2 md:mt-0">
            <div className="text-[16px] line-through text-gray-500">
              ${parseInt(productData.price / (1 - productData.discountPercentage / 100))}
            </div>
            <div className="text-[12px] font-medium text-green-800 p-1 ml-2">
              {productData.discountPercentage}% off
            </div>
          </div>
          <div className="text-[13px] mt-2 md:mt-0">
            <div>Free Delivery</div>
            <div className="font-medium text-green-600">Save Extra with Combo Offers</div>
            <div className="font-medium text-red-800">Only {productData.stock} left</div>
          </div>
        </div>
      </Link>
      <hr />
    </>
  );
};

export default ProductListItem;
