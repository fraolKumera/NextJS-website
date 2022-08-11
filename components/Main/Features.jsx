import React from "react";
import DescriptionCard from "../common/DescriptionCard";

/** @type {Array<DescriptionCardType} */
const features = [
  {
    title: "Creative Design",
    src: "/assets/img/svg/paint-palette.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "Retina Ready",
    src: "/assets/img/svg/vector.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "Easy To Use",
    src: "/assets/img/svg/design-tool.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "Free Updates",
    src: "/assets/img/svg/asteroid.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "Free Updates",
    src: "/assets/img/svg/asteroid.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "App store support",
    src: "/assets/img/svg/cloud-computing.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "Perfect Pixel",
    src: "/assets/img/svg/pixel.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
  {
    title: "Clean Codes",
    src: "/assets/img/svg/code.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
  },
];

const Features = () => (
  <section id="features" className="padd-section text-center">
    <div className="container" data-aos="fade-up">
      <div className="section-title text-center">
        <h2>Amazing Features.</h2>
        <p className="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>

      <div className="row" data-aos="fade-up" data-aos-delay="100">
        {features &&
          features.map((feature, idx) => (
            <DescriptionCard
              key={idx}
              cols={4}
              title={feature.title}
              description={feature.desctiption}
              imgSrc={feature.src}
              imgAlt={feature.alt}
              link={feature.link}
            />
          ))}
      </div>
    </div>
  </section>
);

export default Features;
