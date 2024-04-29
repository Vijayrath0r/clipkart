import ProductListItem from "./ProductListItem";

const ProductsLoading = () => {
  const tempList = [
    {
      id: 1,
      title: "Product",
      description: "description",
      price: 100,
      discountPercentage: 10,
      rating: 5,
      stock: 100,
      brand: "Brand",
      category: "Catogory",
      thumbnail: "/product/phone1.webp",
    },
    {
      id: 2,
      title: "Product",
      description: "description",
      price: 100,
      discountPercentage: 10,
      rating: 5,
      stock: 100,
      brand: "Brand",
      category: "Catogory",
      thumbnail: "/product/phone1.webp",
    },
  ];
  return (
    <div className="opacity-10">
      {tempList.map((product) => (
        <ProductListItem key={product.id} productData={product} />
      ))}
    </div>
  );
};
export default ProductsLoading;
