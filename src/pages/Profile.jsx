import React from "react";
import { profileData } from "../Data/profile";
import DashboardLayout from "../layouts/DashboardLayout";
import HeaderLayout from "../layouts/HeaderLayout";

const Profile = () => {
  return (
    // <HeaderLayout>
    <DashboardLayout>
      <div className="container pt-5" style={{ minHeight: "calc(100vh - 51px)" }}>
        <div className="row mt-5">
          <div className="col-md-4 text-center align-self-center">
            <img
              src={profileData.image}
              className="img-fluid rounded-circle"
              style={{ height: "200px", width: "200px", objectFit: "cover" }}
              width={100}
              height={100}
              alt="Profile Picture"
            />
          </div>
          <div className="col-md-8">
            <h1>{profileData.name}</h1>
            <p>{profileData.profection}</p>
            <p>Lives in {profileData.location}</p>
            <p>{profileData.bio}</p>
            <a href="https://www.linkedin.com/in/johndoe">LinkedIn</a>
          </div>
        </div>
      </div>
    </DashboardLayout>
    // </HeaderLayout>
  );
};

export default Profile;
