import React from 'react';

const ImagePreview = ({ dataUri }) => {
  return <img width="100%" src={dataUri} alt="Visitor" />;
};

export default ImagePreview;
