import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Form = () => {
  return (
    <>
    <Header/>
    <div class="col-lg-7 tm-contact-left">
    
      <form method="POST" action="" class="mb-5 ml-auto mr-0 tm-contact-form">
        <h2 className="tm-pt-30 tm-color-primary tm-post-title">Create New Post</h2>
        <div class="form-group row mb-4">
          <label
            for="title"
            class="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Title
          </label>
          <div class="col-sm-9">
            <input
              class="form-control mr-0 ml-auto"
              name="title"
              id="title"
              type="text"
              required
            />
          </div>
        </div>
        <div class="form-group row mb-4">
          <label
            for="date"
            class="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Date
          </label>
          <div class="col-sm-9">
            <input
              class="form-control mr-0 ml-auto"
              name="date"
              id="date"
              type="date"
              required
            />
          </div>
        </div>
        <div class="form-group row mb-4">
          <label
            for="image"
            class="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Image
          </label>
          <div class="col-sm-9">
            <input
              class="form-control mr-0 ml-auto"
              name="image"
              id="image"
              type="url"
              required
            />
          </div>
        </div>
        <div class="form-group row mb-4">
          <label
            for="author"
            class="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Author
          </label>
          <div class="col-sm-9">
            <input
              class="form-control mr-0 ml-auto"
              name="author"
              id="author"
              type="text"
              required
            />
          </div>
        </div>
        <div class="form-group row mb-5">
          <label
            for="message"
            class="col-sm-3 col-form-label text-right tm-color-primary"
          >
            Text
          </label>
          <div class="col-sm-9">
            <textarea
              class="form-control mr-0 ml-auto"
              name="message"
              id="message"
              rows="8"
              required
            ></textarea>
          </div>
        </div>
        <div class="form-group row text-right">
          <div class="col-12">
            <button class="tm-btn tm-btn-primary tm-btn-small">Submit</button>
          </div>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Form;
