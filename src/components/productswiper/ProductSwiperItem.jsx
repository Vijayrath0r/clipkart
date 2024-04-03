const ProductSwiperItem = () => {
  return (
    <div className="flex flex-col border border-solid rounded-2xl w-full">
        <img
          class="p-8 rounded-t-lg"
          src="/productItem.webp"
          alt="product image"
        />
        <span className="text-center">Iphone 15</span>
        <span className="text-center font-medium">incl of offers</span>

    </div>
  );
};
export default ProductSwiperItem;
