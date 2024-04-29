import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Product from "./pages/Product.jsx";
import ViewCart from "./pages/ViewCart.jsx";
import User from "./pages/User.jsx";
import Vendor from "./pages/Vendor.jsx";
import VendorTemplate from "./pages/VendorTemplate.jsx";
import DashboardContainer from "./components/dashboard/DashboardContainer.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "product/:productId",
        element: <Product />,
      },
      {
        path: "viewcart",
        element: <ViewCart />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
  {
    path: "/vendor",
    element: <VendorTemplate />,
    children: [
      { path: "", element: <Vendor /> },
      { path: "dashboard", element: <DashboardContainer /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
