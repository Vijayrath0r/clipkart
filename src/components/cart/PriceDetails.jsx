const PriceDetails = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="text-xl text-gray-600 mb-2">Price Details</div>
      <hr className="mb-3" />
      <div className="flex justify-between p-2 text-sm md:text-base">
        <div>Price (3 Items)</div>
        <div>$789</div>
      </div>
      <div className="flex justify-between p-2 text-sm md:text-base">
        <div>Discount</div>
        <div className="text-green-600">-$200</div>
      </div>
      <div className="flex justify-between p-2 text-sm md:text-base">
        <div>Delivery Charges </div>
        <div>
          <span className="line-through">$1</span>
          <span className="text-green-600"> Free</span>
        </div>
      </div>
      <div className="flex justify-between p-2 text-sm md:text-base">
        <div>Secured Packaging Fee</div>
        <div>$1.5</div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between p-2 text-sm md:text-base font-semibold">
        <div>Total Amount</div>
        <div>$780</div>
      </div>
      <hr className="my-3" />
      <div className="text-green-700 p-2 text-sm md:text-base">
        You saved $20 on this Order
      </div>
    </div>
  );
};

export default PriceDetails;
