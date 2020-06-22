import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllUserImages, addImage } from "../../redux/actions/imageActions";
import AllPictures from "../home/AllPictures";

const Gallery = ({ getAllUserImages, addImage, images, user }) => {
  const [file, setFile] = useState("");
  const [tags, setTags] = useState([]);

  if (localStorage.getItem("token") != null)
    useEffect(() => {
      getAllUserImages(localStorage.getItem("token")).catch((err) => {
        console.log(err);
      });
    }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    addImage(localStorage.getItem("token"), file);
  };

  const onChangeFile = (e) => {
    e.preventDefault();
    setFile({ file: e.target.files[0] });
  };

  const onChangeTags = (e) => {
    setTags(e.target.value);
  };

  return (
    <section className="gallery-section">
      <div className="adding-image-block">
        <form onSubmit={onFormSubmit}>
          <h1>Image Upload</h1>
          <input type="file" onChange={onChangeFile} />
          <input
            onChange={onChangeTags}
            type="text"
            name="tags"
            placeholder="tags"
          />
          <button type="submit">Upload</button>
        </form>
      </div>
      <AllPictures images={images} />
    </section>
  );
};

const mapStateToProps = (state) => {
  return { images: state.imageReducer.images, user: state.accountReducer.user };
};

const mapDispatchToProps = { getAllUserImages, addImage };

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
