import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaTag } from "react-icons/fa6";

const ProductDetails = () => {
  const product = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
      "https://cdn.dummyjson.com/product-images/1/1.jpg",
      "https://cdn.dummyjson.com/product-images/1/2.jpg",
      "https://cdn.dummyjson.com/product-images/1/3.jpg",
      "https://cdn.dummyjson.com/product-images/1/4.jpg",
      "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
  };
  const offers = [
    {
      type: "Bank Offer",
      description: "5% Cashback on Flipkart Axis Bank Card",
    },
    {
      type: "Bank Offer",
      description:
        "Get ₹25* instant discount for the 1st Flipkart Order using Flipkart UPI",
    },
    {
      type: "Bank Offer",
      description: "₹2000 Off On SBI Credit Card Transactions",
    },
    {
      type: "Special Price",
      description: "Get extra ₹4901 off (price inclusive of cashback/coupon)",
    },
    {
      type: "Bank Offer",
      description: "15% Cashback on SBI Card",
    },
    {
      type: "Bank Offer",
      description: "12% Cashback on AU Bank Card",
    },
  ];
  let [selectedImage, setSelectedImage] = useState(product.thumbnail);
  const handleOnClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="flex my-1 p-3 bg-white">
      <div className="w-1/3">
        <div className="flex min-h-[500px]">
          <div className="w-1/6">
            {product.images.map((image) => (
              <div className="flex items-center p-1 h-[64px] border">
                <img
                  key={image}
                  src={image}
                  onClick={() => {
                    handleOnClick(image);
                  }}
                  alt="Big picture"
                />
              </div>
            ))}
          </div>
          <div className="flex items-center w-5/6 p-5 border">
            <img src={selectedImage} alt="Big picture" />
          </div>
        </div>
      </div>
      <div className="w-2/3 p-2 ml-5">
        <div className=" text-[22px]">{product.title}</div>
        <div className="inline-block bg-green-700 text-[12px] text-white p-1 rounded-xl">
          {product.rating}
          <MdOutlineStar style={{ display: "inline", marginLeft: "3px" }} />
        </div>
        <div className="inline-block text-[15px] text-gray-400 p-1 ml-2">
          21,508 Ratings & 1,486 Reviews
        </div>
        <div className="flex items-end">
          <div className="font-medium text-[22px]">${product.price}</div>
          <div className="flex">
            <div className="text-[16px] line-through text-gray-500 ml-2">
              $
              {parseInt(product.price / (1 - product.discountPercentage / 100))}
            </div>
            <div className="text-[12px] font-medium text-green-800 p-1 ml-2">
              {product.discountPercentage} % off
            </div>
          </div>
        </div>
        <div className="my-2">
          <div className="font-medium text-[16px] mb-1">Available Offers</div>
          {offers.slice(0, 4).map((offer, index) => (
            <div className="flex items-center">
              <div className="text-green-600">
                <FaTag />
              </div>
              <div className="ml-2 font-normal">{offer.type}</div>
              <div className="ml-1 text-[14px]">{offer.description}</div>
              <div className="ml-1 text-blue-600 text-[15px]">T&C</div>
            </div>
          ))}
          {offers.length > 4 && (
            <div className="font-normal text-blue-600 mt-2">
              View {offers.length - 4} more offers
            </div>
          )}
        </div>
        
      </div>
    </div>
  );
};
export default ProductDetails;
