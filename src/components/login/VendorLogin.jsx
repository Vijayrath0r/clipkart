import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { setUserLogin } from "../../actions/userActions";
const VendorLogin = ({ changePageUser }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const vendorLoginSchema = yup.object({
    username: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Enter an vaild Email"),
    password: yup.string().trim().required("Password is required"),
  });
  const [errors, setError] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await vendorLoginSchema.validate(formData, { abortEarly: false });
      setError(false);

      const response = await axios.post(
        "http://localhost:3002/vendor/login",
        formData
      );
      if (response.data.status == 0) {
        setError(true);
      } else {
        const user = response.data.data[0];
        dispatch(setUserLogin(user));
        navigate("/vendor/dashboard");
      }
    } catch (error) {
      if (error.inner && error.inner.length > 0) {
        setError(true);
      }
    }
  };
  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-6">
          <span className="text-4xl text-[#1c6aa1]">Login Vendor</span>
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
          </div>
        </div>
        {errors && (
          <p className="text-red-500 text-sm text-center">
            Invalid Username or password
          </p>
        )}
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
export default VendorLogin;
