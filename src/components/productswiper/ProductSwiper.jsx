// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductSwiperItem from "./ProductSwiperItem";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={6}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
      <SwiperSlide>
        <ProductSwiperItem />
      </SwiperSlide>
    </Swiper>
  );
};
