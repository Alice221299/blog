import React from "react";

const FormComment = () => {
  return (
    <form action="" className="mb-5 tm-comment-form">
      <h2 className="tm-color-primary tm-post-title mb-4">Your comment</h2>
      <div className="mb-4">
        <input className="form-control" name="name" type="text" />
      </div>
      <div className="mb-4">
        <input className="form-control" name="email" type="text" />
      </div>
      <div className="mb-4">
        <textarea className="form-control" name="message" rows="6"></textarea>
      </div>
      <div className="text-right">
        <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>
      </div>
    </form>
  );
};

export default FormComment;
