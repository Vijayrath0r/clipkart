const ExchangeBlock = ({ productPrice }) => {
  return (
    <div className="w-full md:w-1/2 my-5">
      <div className="flex items-center border p-2 bg-blue-100">
        <input
          className="w-4 h-4"
          type="radio"
          name="exchangeradio"
          id="withoutExchange"
          defaultChecked
        />
        <label className="w-8/12 text-gray-700 ml-2" htmlFor="withoutExchange">
          Buy without Exchange
        </label>
        <div className="w-4/12 text-right font-medium">${productPrice}</div>
      </div>
      <div className="border p-2 mt-2">
        <div className="flex items-center">
          <input
            className="w-4 h-4"
            type="radio"
            name="exchangeradio"
            id="withExchange"
          />
          <label className="w-8/12 text-gray-400 ml-2" htmlFor="withExchange">
            Buy with Exchange
          </label>
          <div className="w-4/12 text-right font-medium">Up to ${productPrice} off</div>
        </div>
        <div className="flex mt-2">
          <div className="w-1/12"></div>
          <div className="w-11/12 p-2">
            <div className="text-sm text-gray-400">
              Get extra $100 off on selected models
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
