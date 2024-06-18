import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import DashboardProductItem from "./DashboardProductItem";
import EditProduct from "./EditProduct";
const DashboardProducts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelProductId, setmodelProductId] = useState("");

  const openModal = (data) => {
    setmodelProductId(data); // Set the modal data
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const { data } = useFetch("http://localhost:3002/product/stockList", "POST", {
    tenant: "vijayorg",
  });
  return (
    <div className="flex flex-wrap justify-center">
      {data
        ? data.productList.map((product) => (
          <DashboardProductItem
            key={product.stock_id}
            product={product}
            openModal={openModal}
          />
        ))
        : "this is loading"}
      <EditProduct
        isOpen={isModalOpen}
        onClose={closeModal}
        productId={modelProductId}
      />
    </div>
  );
};
export default DashboardProducts;
