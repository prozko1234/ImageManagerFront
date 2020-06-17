import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllImages } from "../../redux/actions/imageActions";

function AllPictures({ getAllImages, images, error, user }) {
  useEffect(() => {
    getAllImages().catch((error) => {
      console.log(error);
    });
  }, []);
  return (
    <section className="all-pictures">
      {images.map((image) => {
        return (
          <div key={image.name} className="image-block">
            <div className="image-container">
              <img src={image.fileLink} />
            </div>
            <p className="tags">
              {image.tags.map((tag) => {
                return "#" + tag;
              })}
            </p>
          </div>
        );
      })}
    </section>
  );
}

const mapStateToProps = (state) => {
  return { images: state.imageReducer.images };
};

const mapDispatchToProps = { getAllImages };

export default connect(mapStateToProps, mapDispatchToProps)(AllPictures);
