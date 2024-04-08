import { FaTag } from "react-icons/fa6";
const ProductOfferBlock = () => {
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
  return (
    <>
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
    </>
  );
};
export default ProductOfferBlock;
