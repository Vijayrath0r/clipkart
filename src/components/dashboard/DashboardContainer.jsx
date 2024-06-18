import DashboardHeader from "./DashboardHeader";
import DashboardProducts from "./DashboardProducts";

const DashboardContainer = () => {
  return (
    <div className="xl:px-52">
      <div className="bg-white p-3">
        <DashboardHeader />
        <hr />
        <DashboardProducts />
      </div>
    </div>
  );
};
export default DashboardContainer;
