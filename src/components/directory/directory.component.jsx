import React, { useState } from "react";
import FISH_GROUP_DATA from "../../fish-group-data";

import GroupItem from "../group-item/group-item.component";

import "./directory.styles.scss";

const Directory = () => {
  const [state] = useState(FISH_GROUP_DATA);

  return (
    <div className="directory">
      {state.groups.map(({ id, ...otherGroupProps }) => (
        <GroupItem key={id} {...otherGroupProps} />
      ))}
    </div>
  );
};

export default Directory;
