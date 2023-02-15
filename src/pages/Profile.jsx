import React from "react";
import { profileData } from "../Data/profile";

const Profile = () => {
  return (
    <div class="container pt-5" style={{ minHeight: "calc(100vh - 51px)" }}>
      <div class="row mt-5">
        <div class="col-md-4 text-center align-self-center">
          <img
            src={profileData.image}
            class="img-fluid rounded-circle"
            style={{ height: "200px", width: "200px", objectFit: "cover" }}
            width={100}
            height={100}
            alt="Profile Picture"
          />
        </div>
        <div class="col-md-8">
          <h1>{profileData.name}</h1>
          <p>{profileData.profection}</p>
          <p>Lives in {profileData.location}</p>
          <p>{profileData.bio}</p>
          <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
