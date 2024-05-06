// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductSwiperItem from "./ProductSwiperItem";
import { useEffect, useState } from "react";

const ProductSwiper = ({ productList }) => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(5);
      }
    };

    updateSlidesPerView();

    window.addEventListener("resize", updateSlidesPerView);

    return () => {
      window.removeEventListener("resize", updateSlidesPerView);
    };
  }, []);

  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      navigation
    >
      {productList.map((product) => (
        <SwiperSlide key={product.id}>
          <ProductSwiperItem
            key={product.id}
            product={product}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};


export default ProductSwiper;
