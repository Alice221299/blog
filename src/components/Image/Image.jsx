import React from "react";

const Image = ({image}) => {
  return (
    <div className="row tm-row">
      <div className="col-12">
        <hr className="tm-hr-primary tm-mb-55" />
        <img src={image} alt="Image" className="tm-mb-40" style={{width:"100%", height:"535px", objectFit:"cover"}}/>
      </div>
    </div>
  );
};

export default Image;
