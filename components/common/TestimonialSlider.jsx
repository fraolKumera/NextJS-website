import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper } from "swiper/react";

/**
 *
 * @param {React.PropsWithChildren} props
 * @returns
 */
const TestimonialSlider = (props) => (
  <Swiper
    modules={[Pagination, Autoplay]}
    speed={400}
    loop
    pagination={{
      type: "bullets",
      clickable: true,
    }}
    autoplay={{
      delay: 5000,
      disableOnInteraction: false,
    }}
    slidesPerView={"auto"}
  >
    {props.children}
  </Swiper>
);

export default TestimonialSlider;
