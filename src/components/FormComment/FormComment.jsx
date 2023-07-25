import React, { useContext } from "react";
import { AppContext } from "../../Routers/Routers";
import { Link, useLocation } from "react-router-dom";

const FormComment = () => {

  const { user } = useContext(AppContext);
  const location = useLocation();

  return (
    <>
    {
      !user?.name ? <div className="alert alert-danger">Debes estar logueado para poder comentar <Link to='/login' state={{path: location.pathname}}>Iniciar Sesión</Link></div> : <form action="" className="mb-5 tm-comment-form">
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
    }
      
    </>
  );
};

export default FormComment;
