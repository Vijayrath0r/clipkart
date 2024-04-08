const ExchangeBlock = ({ productPrice }) => {
  return (
    <div className="w-1/2 my-5">
      <div className="flex items-center border p-2 bg-blue-100">
        <input
          className="w-1/12 h-4"
          type="radio"
          name="exchangeradio"
          id="withoutExchange"
          checked
        />
        <label className="w-8/12 text-gray-700" htmlFor="withoutExchange">
          Buy without Exchange
        </label>
        <div className="w-3/12 font-medium">${productPrice}</div>
      </div>
      <div className="border p-2">
        <div className="flex items-center ">
          <input
            className="w-1/12 h-4"
            type="radio"
            name="exchangeradio"
            id="withExchange"
          />
          <label className="w-8/12 text-gray-400" htmlFor="withExchange">
            But with Exchange
          </label>
          <div className="w-3/12 font-medium">Up to ${productPrice} off</div>
        </div>
        <div className="flex">
          <div className="w-1/12"></div>
          <div className="w-11/12 p-2">
            <div className="text-sm text-gray-400">
              Get extra $100 of on selected models
            </div>
            <div className="text-base text-red-500">
              Enter pincode to check if exchange is available.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExchangeBlock;
