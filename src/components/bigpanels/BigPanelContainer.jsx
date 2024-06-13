import BigPanelItems from "./BigPanelItems";

const BigPanelContainer = () => {
  const data = [
    "bigpanelitem1.webp",
    "bigpanelitem2.webp",
    "bigpanelitem3.webp",
  ];
  return (
    <div className="flex">
      {data.map((item) => (
        <BigPanelItems key={item} imageName={item} />
      ))}
    </div>
  );
};
export default BigPanelContainer;
