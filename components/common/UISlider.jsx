import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

/**
 *
 * @param {React.PropsWithChildren} props
 * @returns
 */
const UISlider = (props) => (
  <Swiper
    modules={[Pagination, Autoplay]}
    speed={400}
    loop
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    slidesPerView={"auto"}
    pagination={{
      type: "bullets",
      clickable: true,
      el: ".swiper-pagination",
    }}
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      575: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    }}
  >
    {props.children}
    <div className="swiper-pagination"></div>
  </Swiper>
);

export default UISlider;
