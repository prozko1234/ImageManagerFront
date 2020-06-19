import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import AllPictures from "../home/AllPictures";

const Gallery = ({ match }) => {
  const slug = match.slug;
  <section className="gallery-section">
    <AllPictures userGallery={true}></AllPictures>
  </section>;
};

Gallery.propTypes = {};

export default Gallery;
