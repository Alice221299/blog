import React from "react";

const Comment = () => {
  return (
    <div className="tm-comment tm-mb-45">
      <figure className="tm-comment-figure">
        <img
          src="img/comment-1.jpg"
          alt="Image"
          className="mb-2 rounded-circle img-thumbnail"
        />
        <figcaption className="tm-color-primary text-center">Mark Sonny</figcaption>
      </figure>
      <div>
        <p>
          Praesent aliquam ex vel lectus ornare tritique. Nunc et eros quis enim
          feugiat tincidunt et vitae dui. Nullam consectetur justo ac ex laoreet
          rhoncus. Nunc id leo pretium, faucibus sapien vel, euismod turpis.
        </p>
        <div className="d-flex justify-content-between">
          <a href="#" className="tm-color-primary">
            REPLY
          </a>
          <span className="tm-color-primary">June 14, 2020</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
