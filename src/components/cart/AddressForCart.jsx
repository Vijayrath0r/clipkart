import { Link } from "react-router-dom";
import { getLocation } from "../../services/locationService";
import useFetch from "../../hooks/useFetch";
import { useEffect, useState } from "react";

const AddressForCart = () => {
  const { data } = useFetch("http://localhost:3002/adderess/getDefault", "POST", {
    userId: 10,
  });
  console.log(data);

  const [addressTitle, setaddressTitle] = useState("");
  const [addressFull, setaddressFull] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    if (data && data.status === 0) {
      getLocation()
        .then((addressInfo) => {
          console.log(addressInfo);
          setaddressTitle(addressInfo.address_components[9].long_name);
          setType("Current");
          setaddressFull(addressInfo.formatted_address);
        })
        .catch((error) => {
          alert(error);
        });
    } else if (data) {
      const addressData = data.postData[0];
      setaddressTitle(addressData.fullName + ", " + addressData.pinCode);
      setType(addressData.type == 1 ? "Home" : "Office");
      setaddressFull(addressData.line1 + ", " + addressData.line2 + ", " + addressData.city + ", " + addressData.state);
    }
  }, [data]);

  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex bg-white p-5 mr-3">
      <div className="w-11/12">
        <div>
          <span>Deliver to: </span>
          <span className="font-medium">{addressTitle}</span>
          <span className="ml-5 bg-gray-100 p-2 rounded">{type}</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">{addressFull}</span>
        </div>
      </div>
      <div className="w-1/12">
        <Link className="border rounded text-blue-600 p-2">Change</Link>
      </div>
    </div>
  );
};
export default AddressForCart;
