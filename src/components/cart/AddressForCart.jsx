import { Link } from "react-router-dom";

const AddressForCart = () => {
  return (
    <div className="flex bg-white p-5 mr-3">
      <div className="w-11/12">
        <div>
          <span>Deliver to: </span>
          <span className="font-medium">Vijay Rathor, 458001</span>
          <span className="ml-5 bg-gray-100 p-2 rounded">Home</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">
            Garden ke pas, gandhi nagar,mandsaur
          </span>
        </div>
      </div>
      <div className="w-1/12">
        <Link className="border rounded text-blue-600 p-2">Change</Link>
      </div>
    </div>
  );
};
export default AddressForCart;
