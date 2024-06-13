import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import BestDeals from "../bestdeals/BestDeals";
import BigPanelContainer from "../bigpanels/BigPanelContainer";
import TopDeals from "../topdeals/TopDeals";
import FestivalSpecialContainer from "../festivalspecial/FestivalSpecialContainer";
import RecentlyVisitedContainer from "../recentlyvisited/RecentlyVisitedContainer";

const InfiniteScrollMenu = () => {
  const [state, setState] = useState({
    items: 1, // Start with one set of items
    hasMore: true,
  });

  const fetchMoreData = () => {
    if (state.items >= 2) { // Set a threshold for loading more items
      setState((prevState) => ({ ...prevState, hasMore: false }));
      return;
    }
    setTimeout(() => {
      setState((prevState) => ({
        items: prevState.items + 1,
        hasMore: true,
      }));
    }, 1000);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={state.items} // Using the count directly
        next={fetchMoreData}
        hasMore={state.hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<RecentlyVisitedContainer />}
      >
        {Array.from({ length: state.items }).map((_, index) => (
          <React.Fragment key={index}>
            <BestDeals />
            <BigPanelContainer />
            <TopDeals />
            <FestivalSpecialContainer />
          </React.Fragment>
        ))}
      </InfiniteScroll>
    </>
  );
};

export default InfiniteScrollMenu;
