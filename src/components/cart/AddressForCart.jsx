import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getLocation } from "../../services/locationService";
import useFetch from "../../hooks/useFetch";

const AddressForCart = () => {
  const { isLoggedIn, user } = useSelector((state) => state.user);
  const { data } = useFetch(
    isLoggedIn ? "http://localhost:3002/adderess/getDefault" : null,
    "POST",
    isLoggedIn ? { userId: user?.id } : null
  );

  const [addressTitle, setAddressTitle] = useState("");
  const [addressFull, setAddressFull] = useState("");
  const [type, setType] = useState("");

  const handleGetLocation = (user = {}) => {
    getLocation()
      .then((addressInfo) => {
        setAddressTitle((user.firstname ? user.firstname + " " + user.lastname + ", " : '') + addressInfo.address_components[9].long_name);
        setType("Current");
        setAddressFull(addressInfo.formatted_address);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (data) {
        if (data.status === 0) {
          handleGetLocation(user);
        } else {
          const addressData = data.postData[0];
          setAddressTitle(addressData.fullName + ", " + addressData.pinCode);
          setType(addressData.type === 1 ? "Home" : "Office");
          setAddressFull(addressData.line1 + ", " + addressData.line2 + ", " + addressData.city + ", " + addressData.state);
        }
      }
    } else {
      handleGetLocation();
    }
  }, [data, isLoggedIn]);

  if (!isLoggedIn && !addressFull) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex bg-white p-5 mr-3">
      <div className="md:w-10/12">
        <div>
          <span>Deliver to: </span>
          <span className="font-medium">{addressTitle}</span>
          <span className="ml-5 bg-gray-100 p-2 rounded">{type}</span>
        </div>
        <div>
          <span className="text-sm text-gray-600">{addressFull}</span>
        </div>
      </div>
      <div className="md:w-1/12">
        <Link className="border rounded text-blue-600 p-2">Change</Link>
      </div>
    </div>
  );
};

export default AddressForCart;
