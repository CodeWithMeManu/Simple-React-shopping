import React from "react";

const WomenCollection = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.ladiesFashion;
  return (
    <div>
      <h1>{title}</h1>
      <img src="assets/LadiesBanner.gif" />
      <div className="collection-section">
        <div className="image-section">
          <img src="assets/Women/1.jpg" />
          <img src="assets/Women/2.jpg" />
          <img src="assets/Women/3.jpg" />
          <img src="assets/Women/4.jpg" />
          <img src="assets/Women/7.jpg" />
          <img src="assets/Women/6.jpg" />
        </div>
      </div>
    </div>
  );
};

export default WomenCollection;
