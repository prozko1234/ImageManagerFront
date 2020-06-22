import React, { useEffect, useState } from "react";
import AllPictures from "./AllPictures";
import { getAllImages, findImages } from "../../redux/actions/imageActions";
import { connect } from "react-redux";

const Home = ({ getAllImages, findImages, images, user }) => {
  const [tag, setTag] = useState("");

  useEffect(() => {
    getAllImages();
  }, []);

  const handleChange = (event) => {
    setTag(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (tag == "") getAllImages();
    else findImages(tag);
  };

  return (
    <section className="home-front-section">
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search..."
            name="search"
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <AllPictures images={images}></AllPictures>
    </section>
  );
};

const mapStateToProps = (state) => {
  return { images: state.imageReducer.images, user: state.accountReducer.user };
};

const mapDispatchToProps = { getAllImages, findImages };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
