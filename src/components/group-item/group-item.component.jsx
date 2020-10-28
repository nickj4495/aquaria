import React from "react";

import "./group-item.styles.scss";

const GroupItem = ({ title, imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="group-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <h1 className="title">{title}</h1>
    </div>
  );
};

export default GroupItem;
