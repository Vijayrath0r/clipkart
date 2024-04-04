import CategoryBarItem from "./CategoryBarItem";

const CategoryBar = () => {
  const categoryList = [
    { itemName: "Grocery", itemImage: "grocery.webp" },
    { itemName: "Mobiles", itemImage: "mobiles.webp" },
    { itemName: "Fasion", itemImage: "fasion.webp" },
    { itemName: "Electronics", itemImage: "electronics.webp" },
    { itemName: "Home & Funrniture", itemImage: "furniture.webp" },
    { itemName: "Appliances", itemImage: "appliances.webp" },
    { itemName: "Travel", itemImage: "travel.webp" },
    { itemName: "Beaty, toys & more", itemImage: "toy.webp" },
    { itemName: "Two Wheelers", itemImage: "bike.webp" },
  ];
  return (
    <div className="flex bg-white my-5 justify-center">
      {categoryList.map((item) => (
        <CategoryBarItem
          key={item.itemName}
          itemImage={item.itemImage}
          ItemName={item.itemName}
        />
      ))}
    </div>
  );
};

export default CategoryBar;
