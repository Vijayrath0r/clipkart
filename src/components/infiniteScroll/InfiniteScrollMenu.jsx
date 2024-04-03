import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BestDeals from "../bestdeals/BestDeals";
import BigPanelContainer from "../bigpanels/BigPanelContainer";
import TopDeals from "../topdeals/TopDeals";
import FestivalSpecialContainer from "../festivalspecial/FestivalSpecialContainer";
import RecentlyVisitedContainer from "../recentlyvisited/RecentlyVisitedContainer";

const InfiniteScrollMenu = () => {
  const [state, setState] = useState({
    items: Array.from({ length: 1 }),
    hasMore: true,
  });

  const fetchMoreData = () => {
    if (state.items.length >= 1) {
      setState({ ...state, hasMore: false });
      return;
    }
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        items: prevState.items.concat(Array.from({ length: 1 })),
      }));
    }, 1000);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<RecentlyVisitedContainer />}
      >
        {state.items.map((_, index) => (
          <>
            <BestDeals />
            <BigPanelContainer />
            <TopDeals />
            <FestivalSpecialContainer />
          </>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrollMenu;
