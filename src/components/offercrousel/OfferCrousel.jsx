import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
function OfferCrousel() {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-[100%]" src="/offercrousel.webp" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src="/offercrousel.webp" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src="/offercrousel.webp" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-[100%]" src="/offercrousel.webp" alt="..." />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OfferCrousel;
