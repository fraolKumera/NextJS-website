import React from "react";
import Image from "next/image";
import propTypes from "prop-types";

/** @type {React.CSSProperties} */
const TitleStyle = {
  marginTop: "3rem",
};

const DescriptionCard = (props) => {
  /**
   * @type {number} cols
   * @type {string} imgSrc
   * @type {string} imgSrc
   * @type {string} imgAlt
   * @type {string} title
   * @type {string} description
   * @type {string} link
   * */
  const { imgSrc, imgAlt, title, description, link } = props;
  /**
   * @type {number} cols
   * */
  const cols = props.cols === 4 ? 3 : 4;

  return (
    <div
      className={`col-md-6 col-lg-${cols}`}
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      <div className="feature-block">
        <Image src={imgSrc} alt={imgAlt} height={60} width={60} />
        <h5 style={TitleStyle}>{title}</h5>
        <p>{description}</p>
        {link && <a href={link}>read more</a>}
      </div>
    </div>
  );
};

DescriptionCard.propTypes = {
  cols: propTypes.oneOf([3, 4]).isRequired,
  imgSrc: propTypes.string.isRequired,
  imgAlt: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  link: propTypes.string,
};

export default DescriptionCard;
