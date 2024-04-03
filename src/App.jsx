import "./App.css";
import Nav from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import CategoryBar from "./components/categorybar/CategoryBar";
import OfferCrousel from "./components/offercrousel/OfferCrousel";
import BestDeals from "./components/bestdeals/BestDeals";
import BigPanelContainer from "./components/bigpanels/BigPanelContainer";
import TopDeals from "./components/topdeals/TopDeals";
import FestivalSpecialContainer from "./components/festivalspecial/FestivalSpecialContainer";

function App() {
  return (
    <>
      <Nav />
      <div className="main px-24">
        <CategoryBar />
        <OfferCrousel />
        <BestDeals />
        <BigPanelContainer/>
        <TopDeals/>
        <FestivalSpecialContainer/>
      </div>
      <Footer />
    </>
  );
}

export default App;
