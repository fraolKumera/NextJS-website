import React from "react";

// Components
import GetStartedSection from "./Main/GetStartedSection";
import UIDesign from "./Main/UIDesign";
import Features from "./Main/Features";
import Screenshots from "./Main/Screenshots";
import Video from "./Main/Video";
import Teams from "./Main/Teams";
import Testimonials from "./Main/Testimonials";
import Pricing from "./Main/Pricing";
import Blog from "./Main/Blog";
import NewsLetter from "./Main/NewsLetter";
import Contact from "./Main/Contact";

const Main = (props) => (
  <main id="main">
    <GetStartedSection />
    <UIDesign />
    <Features />
    <Screenshots />
    <Video />
    <Teams />
    <Testimonials />
    <Pricing />
    <Blog />
    <NewsLetter />
    <Contact />
  </main>
);

export default Main;
