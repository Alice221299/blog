import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Form = () => {
  return (
    <>
    <Header/>
    <div className="col-lg-7 tm-contact-left">
    
      <form method="POST" action="" className="mb-5 ml-auto mr-0 tm-contact-form">
        <h2 className="tm-pt-30 tm-color-primary tm-post-title">Create New Post</h2>
        <div className="form-group row mb-4">
          <label
            htmlFor="title"
            className="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Title
          </label>
          <div className="col-sm-9">
            <input
              className="form-control mr-0 ml-auto"
              name="title"
              id="title"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label
            htmlFor="date"
            className="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Date
          </label>
          <div className="col-sm-9">
            <input
              className="form-control mr-0 ml-auto"
              name="date"
              id="date"
              type="date"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label
            htmlFor="image"
            className="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Image
          </label>
          <div className="col-sm-9">
            <input
              className="form-control mr-0 ml-auto"
              name="image"
              id="image"
              type="url"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-4">
          <label
            htmlFor="author"
            className="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Author
          </label>
          <div className="col-sm-9">
            <input
              className="form-control mr-0 ml-auto"
              name="author"
              id="author"
              type="text"
              required
            />
          </div>
        </div>
        <div className="form-group row mb-5">
          <label
            htmlFor="message"
            className="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Text
          </label>
          <div className="col-sm-9">
            <textarea
              className="form-control mr-0 ml-auto"
              name="message"
              id="message"
              rows="8"
              required
            ></textarea>
          </div>
        </div>
        <div className="form-group row text-right">
          <div className="col-12">
            <button className="tm-btn tm-btn-primary tm-btn-small">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Form;
