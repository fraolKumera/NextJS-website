import React from "react";
import { SwiperSlide } from "swiper/react";
import UISlider from "../common/UISlider";
import Image from "next/image";

const screenshots = [
  {
    src: "/assets/img/screen/1.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/2.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/3.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/4.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/5.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/6.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/7.png",
    alt: "Simple Alt Text",
  },
  {
    src: "/assets/img/screen/8.png",
    alt: "Simple Alt Text",
  },
];

const Screenshots = () => (
  <section id="screenshots" className="padd-section text-center">
    <div className="container" data-aos="fade-up">
      <div className="section-title text-center">
        <h2>App Gallery</h2>
        <p className="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>

      <UISlider>
        <div className="swiper-wrapper align-items-center">
          {screenshots.map((shot, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={shot.src}
                className="img-fluid"
                alt={shot.alt}
                layout="responsive"
                height={548}
                width={309}
              />
            </SwiperSlide>
          ))}
        </div>
      </UISlider>
    </div>
  </section>
);

export default Screenshots;
