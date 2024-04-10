const PriceDetails = () => {
  return (
    <div className="bg-white p-3">
      <div className="text-xl text-gray-600">Price Details</div>
      <hr />
      <div className="flex justify-between p-3">
        <div>Price (3 Items)</div>
        <div>$789</div>
      </div>
      <div className="flex justify-between p-3">
        <div>Discount</div>
        <div className="text-green-600">-$200</div>
      </div>
      <div className="flex justify-between p-3">
        <div>Delivery Charges </div>
        <div>
          <span className="line-through">$1</span>
          <span className="text-green-600"> Free</span>
        </div>
      </div>
      <div className="flex justify-between p-3">
        <div>Secured Packaging Fee</div>
        <div>$1.5</div>
      </div>
      <hr />
      <div className="flex justify-between p-3">
        <div>Total Amount</div>
        <div>$780</div>
      </div>
      <hr />
      <div className="text-green-700 p-3">You saved $20 on this Order</div>
    </div>
  );
};
export default PriceDetails;
