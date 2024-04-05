import { MdOutlineStar } from "react-icons/md";

const ProductListItem = ({ productData }) => {
  return (
    <>
      <div className="flex h-[250px] p-5">
        <div className="w-3/12">
          <img
            className="h-[100%] w-[100%] rounded-3xl"
            src={productData.thumbnail}
            alt=""
          />
        </div>
        <div className="w-6/12 p-3">
          <div className="font-medium text-[22px]">{productData.title}</div>
          <div>
            <div className="inline-block bg-green-700 text-[15px] text-white p-1 rounded-xl">
              {productData.rating}
              <MdOutlineStar style={{ display: "inline", marginLeft: "3px" }} />
            </div>
            <div className="inline-block text-[15px] text-gray-400 p-1">
              21,508 Ratings & 1,486 Reviews
            </div>
            <div className="text-[13px] ml-4 text-gray-600">
              <ul className="list-disc">
                <li>128 GB ROM</li>
                <li>15.49 cm (6.1 inch) Super Retina XDR Display</li>
                <li>48MP + 12MP | 12MP Front Camera</li>
                <li>A16 Bionic Chip, 6 Core Processor Processor</li>
                <li>
                  1 Year Warranty for Phone and 6 Months Warranty for In-Box
                  Accessories
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-2/12 p-3">
          <div className="font-medium text-[22px]">${productData.price}</div>
          <div className="flex">
            <div className="text-[16px] line-through text-gray-500">
              $
              {parseInt(
                productData.price / (1 - productData.discountPercentage / 100)
              )}
            </div>
            <div className="text-[12px] font-medium text-green-800 p-1">
              {productData.discountPercentage} % off
            </div>
          </div>
          <div className="text-[13px]">
            <div>Free Delivery</div>
            <div className="font-medium text-green-600">
              Save Extra with Combo Offers
            </div>
            <div className="font-medium text-red-800">
              Only {productData.stock} left
            </div>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
export default ProductListItem;
