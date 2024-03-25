import React from "react";

const ImageC = ({ urlImage, textAlt, widImg }) => {
  return <img src={urlImage} alt={textAlt} width={widImg} />;
};

export default ImageC;
