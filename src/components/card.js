import React from "react";
import PropTypes from "prop-types";

const Card = ({ title, excerpt }) => (
  <article>
    <h1 dangerouslySetInnerHTML={{ __html: title }} />
    <p dangerouslySetInnerHTML={{ __html: excerpt }} />
  </article>
);

Card.propTypes = {
  title: PropTypes.string,
  excerpt: PropTypes.string
};

Card.defaultProps = {
  title: ``,
  excerpt: ``
};

export default Card;
