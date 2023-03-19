import React from "react";
// import post from "../Data/post";
// import "./PostFeed.css";

const PostFeed = ({ post }) => {
  return (
    <div id="post" className="rounded mb-3 border shadow">
      <div className="d-flex align-items-center gap-2 mb-3">
        <img src={post.user.image} alt={post.user.username} id="profile-img" width="50" height="50" />

        <div className="">
          <div id="user-name" className="fw-bold" style={{ fontSize: "12px" }}>
            {post.user.name}
          </div>
          <div id="location" style={{ fontSize: "10px" }}>
            {post.user.location}
          </div>
        </div>
      </div>
      <img src={post.event.image} alt="post" id="image" width="400" height="300" className="rounded" />
      <div>
        <div className="d-flex gap-2 py-3">
          <i className="fa-regular fa-heart"></i>
          <i className="fa-regular fa-comment"></i>
          <i className="fa-solid fa-arrow-up-from-bracket"></i>
          <i className="fa-regular fa-bookmark block ms-auto"></i>
        </div>

        <div className="m-0">
          <p className="m-0 fw-bold">{post.event.name}</p>
          <p className="mb-3" style={{ fontSize: "14px" }}>
            <i className="fa-solid fa-location-dot"></i>
            <span className="ms-1">{post.event.location}</span>
          </p>
        </div>

        <p style={{ fontSize: "12px" }} className="lh-sm">
          {post.event.description}
        </p>
      </div>

      <div>
        <button className="btn btn-primary" style={{ width: "100%" }}>
          Join
        </button>
        <button className="btn btn-outline-secondary mt-2" data-bs-toggle="modal" data-bs-target="#participants" style={{ width: "100%" }}>
          {" "}
          View Participents
        </button>
      </div>
    </div>
  );
};

export default PostFeed;
