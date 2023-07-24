import React from "react";

const PostInfo = ({info}) => {
  return (
    <div className="mb-4">
      <h2 className="pt-2 tm-color-primary tm-post-title">
        {info.title}
      </h2>
      <p className="tm-mb-40">{info.date} posted by {info.author.name}</p>
      <p>
        {info.text}
      </p>
      <span className="d-block text-right tm-color-primary">
        Creative . Design . Business
      </span>
    </div>
  );
};

export default PostInfo;
