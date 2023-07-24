import React, { useEffect, useState } from "react";
import { getAuthor } from "../../services/authorService";

const Comment = ({ comment }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    
    receiveAuthor();
  }, []);

  const receiveAuthor = async () => {
    const response = await getAuthor(comment.authorId);
    setAuthor(response);
  };
  return (
    <>
      {author?.id && (
        <div className="tm-comment tm-mb-45">
          <figure className="tm-comment-figure">
            <img
              src={author.image}
              alt="Image"
              className="mb-2 rounded-circle img-thumbnail"
              style={{width:"80px", height:"80px", objectFit:"cover"}}
            />
            <figcaption className="tm-color-primary text-center">
              {author.name}
            </figcaption>
          </figure>
          <div>
            <p>{comment.text}</p>
            <div className="d-flex justify-content-between">
              <a href="#" className="tm-color-primary">
                REPLY
              </a>
              <span className="tm-color-primary mx-5">{comment.date}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comment;
