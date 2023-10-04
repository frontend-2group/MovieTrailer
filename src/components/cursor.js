import React from "react";
import { CustomCursor } from "react-svg-cursor";
import png from "../assets/trailCursor.png";

const Cursor = () => {
  return (
    <CustomCursor
      component={png}
      isDisabled={false}
      width={56}
      height={56}
      zIndex={500}
      transform="rotateY(0deg)"
    />
  );
};

export default Cursor;
