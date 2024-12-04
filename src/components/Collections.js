import React from "react";

const Collections = (props) => {
  const { title, image1, image2, image3, image4, image5, image6 } =
    props.gentsFashion;
  return (
    <div>
      <h1>Gents Fashion</h1>
      <div className="collection-section">
        <div className="image-section">
          <img src={image1} alt={title} />
          <img src={image2} alt={title} />
          <img src={image3} alt={title} />
          <img src={image4} alt={title} />
          <img src={image5} alt={title} />
          <img src={image6} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Collections;
