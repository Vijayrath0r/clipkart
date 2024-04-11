import { useState } from "react";
import CreateUserAccountForm from "../components/createaccount/CreateUserAccountForm";
import UserLogin from "../components/login/UserLogin";

const User = () => {
  let [currentPage, setCurrentPage] = useState("login");
  const changePageUser = (pageName) => {
    setCurrentPage(pageName);
  };
  return (
    <div className="flex justify-center">
      <div className="bg-white m-5 p-5">
        {currentPage == "login" ? (
          <UserLogin changePageUser={changePageUser} />
        ) : (
          <CreateUserAccountForm changePageUser={changePageUser} />
        )}
      </div>
    </div>
  );
};
export default User;
