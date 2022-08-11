import React from "react";
import DescriptionCard from "../common/DescriptionCard";

/** @type {Array<DescriptionCardType} */
const sections = [
  {
    title: "Introducing Whatsapp",
    src: "/assets/img/svg/cloud.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
    link: "#",
  },
  {
    title: "User Friendly Interface",
    src: "/assets/img/svg/planet.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
    link: "#",
  },
  {
    title: "build the app everyone love",
    src: "/assets/img/svg/asteroid.svg",
    alt: "Apple",
    desctiption: `
      Lorem Ipsum is simply dummy text of the printing and typesetting
      industry
    `,
    link: "#",
  },
];

const GetStartedSection = () => {
  return (
    <section id="get-started" className="padd-section text-center">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center">
          <h2>simple systeme fordiscount </h2>
          <p className="separator">Integer cursus bibendum augue ac cursus .</p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {sections &&
            sections.map((section, idx) => (
              <DescriptionCard
                cols={3}
                key={idx}
                title={section.title}
                description={section.desctiption}
                imgSrc={section.src}
                imgAlt={section.alt}
                link={section.link}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;
