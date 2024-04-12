import { Footer } from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import NavVendor from "../components/nav/NavVendor";

function VendorTemplate() {
  return (
    <>
      <NavVendor />
      <Outlet />

      <Footer />
    </>
  );
}

export default VendorTemplate;
