import React from "react";
import AllPictures from "./AllPictures";

export default function Home() {
  return (
    <section className="home-front-section">
      <AllPictures userGallery={false}></AllPictures>
    </section>
  );
}
