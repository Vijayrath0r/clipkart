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
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    },
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
      thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
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
