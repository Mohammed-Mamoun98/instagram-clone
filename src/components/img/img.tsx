import React from "react";

interface Iimg {
  src: any;
  alt: string;
}

const Img = (props: Iimg) => {
  return (
    <img
      src={props.src}
      alt={props.alt}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default Img;
