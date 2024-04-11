import { useState } from "react";
import CreateVendorAccountForm from "../components/createaccount/CreateVendorAccountForm";
import VendorLogin from "../components/login/VendorLogin";

const Vendor = () => {
  let [currentPage, setCurrentPage] = useState("login");
  const changePageUser = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
    <div className="flex justify-center">
      <div className="bg-white m-5 p-5">
        {currentPage == "login" ? (
          <VendorLogin changePageUser={changePageUser} />
        ) : (
          <CreateVendorAccountForm changePageUser={changePageUser} />
        )}
      </div>
    </div>
  );
};
export default Vendor;
