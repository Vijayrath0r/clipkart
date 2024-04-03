import BigPanelItems from "./BigPanelItems";

const BigPanelContainer = () => {
  const data = ["panel1", "panel2", "panel3"];
  return (
    <div className="flex">
      {data.map((item) => (
        <BigPanelItems />
      ))}
    </div>
  );
};
export default BigPanelContainer;
