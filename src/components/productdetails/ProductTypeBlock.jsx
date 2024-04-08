import { CiLocationOn } from "react-icons/ci";

const ProductTypeBlock = ({ productImages }) => {
  let deliveryDate = new Date();
  const colorTypes = [
    {
      color: "red",
      image: productImages[0],
    },
    {
      color: "blue",
      image: productImages[0],
    },
    {
      color: "white",
      image: productImages[0],
    },
    {
      color: "black",
      image: productImages[0],
    },
    {
      color: "gold",
      image: productImages[0],
    },
  ];
  const storageType = [128, 256, 512];
  return (
    <div className="w-[100] my-5">
      <div className="inline-block w-1/2 p-2">
        <div className="flex">
          <div className="w-1/6 text-gray-600">Color</div>
          <div className="w-5/6 flex">
            {colorTypes.slice(0, 3).map((type) => (
              <div className="w-1/4 p-2 border  ">
                <img src={type.image} alt="" />
              </div>
            ))}
            {colorTypes.length > 4 && (
              <div className="w-1/4 p-2 border  font-normal text-blue-600">
                View {colorTypes.length - 3} more
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="inline-block w-1/2 p-2">
        <div className="flex">
          <div className="w-1/6 text-gray-600">Storage</div>
          <div className="w-5/6 flex justify-evenly">
            {storageType.map((type) => (
              <div className="font-medium border px-4 py-2">{type}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="inline-block w-1/2 p-2">
        <div className="flex">
          <div className="w-1/6 text-gray-600">Delivery</div>
          <div className="w-5/6">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <CiLocationOn />
              </div>
              <input
                type="text"
                id="input-group-1"
                className="text-gray-900 text-sm rounded-lg  block w-full ps-10 p-2.5 focus:border-none"
                placeholder="Enter delivery pincode"
              />
              <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 text-blue-500 cursor-pointer">
                Check
              </div>
            </div>
            <div>
              <span>Delivery by 10,Apr Wednesday</span>
              <span className="border divide-x-0 mx-1"></span>
              <span>
                <span className="text-green-600">Free</span>
                <span className="line-through">$1</span>
              </span>
              <div className="text-sm text-gray-600">
                If ordered before 5 pm
              </div>
              <div className="text-blue-400">View Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductTypeBlock;
