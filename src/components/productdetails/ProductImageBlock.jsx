import { useEffect, useState } from "react";
const ProductImageBlock = ({ productImages }) => {
  let [selectedImage, setSelectedImage] = useState(productImages[0]);
  useEffect(() => {
    setSelectedImage(productImages[0]);
  }, [productImages]);
  const handleOnClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className="flex min-h-[500px]">
      <div className="w-1/6">
        {productImages.map((image) => (
          <div className="flex items-center p-1 h-[64px] border">
            <img
              key={image}
              src={image}
              onClick={() => {
                handleOnClick(image);
              }}
              alt="Big picture"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center w-5/6 p-5 border">
        <img src={selectedImage} alt="Big picture" />
      </div>
    </div>
  );
};
export default ProductImageBlock;
