import ProductOfCartItem from "./ProductOfCartItem";

const ProductsOfCart = () => {
  const productsInCart = [
    {
      id: 1,
      productName: "Samsung galaxy S21 FE with SnapDragon 888",
      colorType: "Navy blue",
      image: "./product/phone3.webp",
      storageType: "128",
      ram: "8",
      saller: "TrueComRetail",
      actualPrice: "69,999",
      discountedPrice: "29,999",
      discountPersent: "57",
      appliedOffers: 4,
      securePackagingFee: 59,
      deliveryFree: 40,
    },
    {
      id: 2,
      productName: "Apple iphone 51",
      colorType: "blue",
      image: "./product/phone1.webp",
      storageType: "128",
      ram: "8",
      saller: "Vision Star",
      actualPrice: "79,900",
      discountedPrice: "72,999",
      discountPersent: "8",
      appliedOffers: 3,
      securePackagingFee: 99,
      deliveryFree: 40,
    },
  ];
  return (
    <>
      <div className="bg-white p-5 mr-3 mt-3">
        {productsInCart.map((product) => (
          <ProductOfCartItem product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductsOfCart;
