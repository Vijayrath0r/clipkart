import CategoryBar from "../components/categorybar/CategoryBar";
import OfferCrousel from "../components/offercrousel/OfferCrousel";
import BestDeals from "../components/bestdeals/BestDeals";
import BigPanelContainer from "../components/bigpanels/BigPanelContainer";
import TopDeals from "../components/topdeals/TopDeals";
import FestivalSpecialContainer from "../components/festivalspecial/FestivalSpecialContainer";
import InfiniteScrollMenu from "../components/infiniteScroll/InfiniteScrollMenu";
const Home = () => {
  return (
    <div className="main px-0 md:px-24">
      <CategoryBar />
      <OfferCrousel />
      <BestDeals />
      <BigPanelContainer />
      <TopDeals />
      <FestivalSpecialContainer />
      <InfiniteScrollMenu />
    </div>
  );
};
export default Home;
