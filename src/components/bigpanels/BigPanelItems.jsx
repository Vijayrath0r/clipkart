const BigPanelItems = ({ imageName }) => {
  return (
    <>
      <div className="w-1/3 m-auto">
        <img src={"/bigpanel/" + imageName} alt="" />
      </div>
    </>
  );
};

export default BigPanelItems;
