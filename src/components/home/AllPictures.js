import React from "react";

function AllPictures({ images }) {
  return (
    <section className="all-pictures">
      {images.map((image) => {
        return (
          <div key={image.id} className="image-block">
            <div className="image-container">
              <img src={image.fileLink} />
            </div>
            <p className="tags">
              {image.tags.map((tag) => {
                if (image.tags.length === 1) return <a href="#">{"#" + tag}</a>;
                else return <a href="#">{"#" + tag + ", "}</a>;
              })}
            </p>
          </div>
        );
      })}
    </section>
  );
}

export default AllPictures;
