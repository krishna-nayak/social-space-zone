import React, { useState } from "react";

const PostInputModal = () => {
  const [postData, setPostData] = useState({ event_name: "", description: "", location: "", date: "", image_url: "" });
  const onHandleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const resetData = () => {
    setPostData({ event_name: "", description: "", location: "", date: "", image_url: "" });
  };
  return (
    <div className="modal fade" id="postStaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              Create Event Post
            </h1>
            <button onClick={resetData} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form className="form-group">
              <div className="row">
                <div className="col-12">
                  <label htmlFor="grid-first-name" className="form-control-label">
                    Event Name
                  </label>
                  <input onChange={onHandleChange} name="event_name" value={postData.event_name} type="text" className="form-control" id="grid-first-name" placeholder="Jane" />
                </div>
                <div className="col-12">
                  <label htmlFor="grid-last-name" className="form-control-label">
                    Description
                  </label>
                  <textarea onChange={onHandleChange} name="description" value={postData.description} className="form-control" id="grid-last-name" placeholder="..."></textarea>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <label htmlFor="grid-city" className="form-control-label">
                    City
                  </label>
                  <input onChange={onHandleChange} name="location" value={postData.location} type="text" className="form-control" id="grid-city" placeholder="Albuquerque" />
                </div>
                <div className="col-6">
                  <label htmlFor="grid-password" className="form-control-label">
                    Date
                  </label>
                  <input onChange={onHandleChange} name="date" value={postData.date} type="date" className="form-control" id="grid-date" placeholder="" />
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <label htmlFor="grid-city" className="form-control-label">
                    Image URL
                  </label>
                  <input onChange={onHandleChange} name="image_url" value={postData.image_url} type="text" className="form-control" id="grid-url" placeholder="Albuquerque" />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={resetData} type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostInputModal;
