import React from "react";
import { SwiperSlide } from "swiper/react";
import TestimonialSlider from "../common/TestimonialSlider";

/** @type {import("react").CSSProperties} */
const TestimonialStyle = {
  paddingBottom: "3rem",
};

/** @type {Array<TestimonialType>} */
const testimonials = [
  {
    id: "1",
    title: "Our Users Speak volumes us",
    body: `
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has
      survived not only five centuries.
    `,
    author: "Kimberly Tran",
    role: "Manager",
  },
  {
    id: "2",
    title: "Our Users Speak volumes us",
    body: `
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has
      survived not only five centuries.
    `,
    author: "Kimberly Tran",
    role: "Manager",
  },
  {
    id: "3",
    title: "Our Users Speak volumes us",
    body: `
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry&apos;s standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It has
      survived not only five centuries.
    `,
    author: "Kimberly Tran",
    role: "Manager",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="padd-section text-center">
    <div className="container" data-aos="fade-up">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="testimonials-content">
            <div
              id="carousel-example-generic"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <TestimonialSlider>
                {testimonials &&
                  testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={testimonial.id}>
                      <div
                        style={TestimonialStyle}
                        className="carousel-item active"
                      >
                        <div className="top-top">
                          <h2>{testimonial.title}</h2>
                          <p>{testimonial.body}</p>
                          <h4>
                            {testimonial.author} <span>{testimonial.role}</span>
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
              </TestimonialSlider>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials;
