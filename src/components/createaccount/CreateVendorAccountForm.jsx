import axios from "axios";
import { useState } from "react";
import * as yup from "yup";
const CreateVendorAccountForm = ({ changePageUser }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userEmail: "",
    userOrg: "",
    password: "",
    confirmPassword: "",
    userCity: "",
    userState: "",
    zipCode: "",
  });
  const [errors, setError] = useState({});
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const userSchema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    userOrg: yup.string().required("Organisation Name is required"),
    userEmail: yup
      .string()
      .required("Email is required")
      .email("Enter an vaild Email"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain at least one special character"
      )
      .test(
        "empty-password",
        "Password is required",
        (value) => value !== undefined && value !== null && value !== ""
      ),
    confirmPassword: yup
      .string()
      .required("Field is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError({});
      await userSchema.validate(formData, { abortEarly: false });
      console.log(formData);

      const response = await axios.post(
        "http://localhost:3002/vendor/create",
        formData
      );
      if (response.data.status == 0) {
        const newError = {};
        newError["userEmail"] = response.data.message;
        setError(newError);
      } else {
        setError({});
      }
    } catch (error) {
      const newError = {};
      error.inner.forEach((err) => {
        newError[err.path] = err.message;
      });
      setError(newError);
    }
  };
  return (
    <>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-6">
          <span className="text-4xl text-[#1c6aa1]">Create Saller</span>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstName"
              type="text"
              placeholder="Jane"
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <p className="text-red-500 text-xs">{errors.firstName}</p>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="lastName"
              type="text"
              placeholder="Doe"
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <p className="text-red-500 text-xs">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-org"
            >
              Orgnisation Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-org"
              name="userOrg"
              type="text"
              placeholder="Enter Orgnisation Name"
              onChange={handleInputChange}
            />
            {errors.userOrg && (
              <p className="text-red-500 text-xs">{errors.userOrg}</p>
            )}
          </div>
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
              name="userEmail"
              type="text"
              placeholder="Enter your Email"
              onChange={handleInputChange}
            />
            {errors.userEmail && (
              <p className="text-red-500 text-xs">{errors.userEmail}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-64 px-3">
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
          <div className="w-64 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password2"
            >
              Confirm you password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password2"
              name="confirmPassword"
              type="password"
              placeholder="******************"
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs">{errors.confirmPassword}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              name="userCity"
              type="text"
              placeholder="Indore"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="userState"
                onChange={handleInputChange}
              >
                <option>MP</option>
                <option>UP</option>
                <option>CH</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              name="zipCode"
              type="text"
              placeholder="452001"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <button
            className="appearance-none block w-full bg-blue-500 text-white border border-gray-200 rounded py-3 px-4 m-3  leading-tight focus:outline-none focus:bg-blue-600 focus:scale-105"
            name="submit"
            type="submit"
          >
            submit
          </button>
        </div>
        <div>
          <span
            onClick={() => changePageUser("login")}
            className="float-right text-blue-600"
          >
            Already have account? Login.
          </span>
        </div>
      </form>
    </>
  );
};
export default CreateVendorAccountForm;
