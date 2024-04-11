import { useState } from "react";
const UserLogin = ({ changePageUser }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, serError] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-6">
          <span className="text-4xl text-[#1c6aa1]">Login user</span>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              name="username"
              type="text"
              placeholder="Enter your Email"
              onChange={handleInputChange}
            />
            {errors.username && (
              <p className="text-red-500 text-xs">{errors.username}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password1"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password1"
              name="password"
              type="password"
              placeholder="******************"
              onChange={handleInputChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <button
            className="appearance-none block w-full bg-blue-500 text-white border border-gray-200 rounded py-3 px-4 m-3  leading-tight focus:outline-none focus:bg-blue-600 focus:scale-105"
            name="submit"
            type="submit"
          >
            Login
          </button>
        </div>
        <div>
          <span
            onClick={() => changePageUser("create")}
            className="float-right text-blue-600"
          >
            New Customer? Sign up
          </span>
        </div>
      </form>
    </>
  );
};
export default UserLogin;
