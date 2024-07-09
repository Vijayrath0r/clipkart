import { CiLocationOn } from "react-icons/ci";

const ProductTypeBlock = ({ productImages }) => {
  let deliveryDate = new Date();
  const colorTypes = [
    { color: "red", image: productImages[0] },
    { color: "blue", image: productImages[0] },
    { color: "white", image: productImages[0] },
    { color: "black", image: productImages[0] },
    { color: "gold", image: productImages[0] },
  ];
  const storageType = [128, 256, 512];

  return (
    <div className="w-full my-5">
      <div className="flex flex-col md:flex-row mb-4">
        <div className="w-full md:w-1/2 p-2">
          <div className="flex">
            <div className="w-1/4 text-gray-600">Color</div>
            <div className="w-3/4 flex flex-wrap">
              {colorTypes.slice(0, 3).map((type, index) => (
                <div key={index} className="w-1/3 p-2 border">
                  <img src={type.image} alt={type.color} />
                </div>
              ))}
              {colorTypes.length > 3 && (
                <div className="w-1/3 p-2 border text-blue-600">
                  View {colorTypes.length - 3} more
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 p-2">
          <div className="flex">
            <div className="w-1/4 text-gray-600">Storage</div>
            <div className="w-3/4 flex justify-evenly">
              {storageType.map((type, index) => (
                <div key={index} className="font-medium border px-4 py-2">{type}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 text-gray-600 mb-2 md:mb-0">Delivery</div>
          <div className="w-full md:w-3/4">
            <div className="relative mb-2 md:mb-0">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <CiLocationOn />
              </div>
              <input
                type="text"
                className="text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 focus:border-none"
                placeholder="Enter delivery pincode"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-blue-500 cursor-pointer">
                Check
              </div>
            </div>
            <div>
              <span>Delivery by 10, Apr Wednesday</span>
              <span className="mx-1 border"></span>
              <span>
                <span className="text-green-600">Free</span>
                <span className="line-through">$1</span>
              </span>
              <div className="text-sm text-gray-600">If ordered before 5 pm</div>
              <div className="text-blue-400">View Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductTypeBlock;
