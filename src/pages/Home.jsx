import React from "react";
import FeedCollection from "../components/FeedCollection";
import PostInputModal from "../components/PostInputModal";
import ViewParticipents from "../components/ViewParticipants";

const Home = () => {
  return (
    <div className="bg-light">
      {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Post +
      </button> */}
      <FeedCollection />
      <ViewParticipents />
    </div>
  );
};

export default Home;
