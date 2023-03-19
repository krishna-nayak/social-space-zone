import React, { useEffect } from "react";
import FeedCollection from "../components/FeedCollection";
import PostInputModal from "../components/PostInputModal";
import ViewParticipents from "../components/ViewParticipants";
import DashboardLayout from "../layouts/DashboardLayout";
import HeaderLayout from "../layouts/HeaderLayout";

const Home = () => {
  return (
    // <HeaderLayout>
    <DashboardLayout>
      <div className="bg-light">
        <FeedCollection />
        <ViewParticipents />
      </div>
    </DashboardLayout>
    // </HeaderLayout>
  );
};

export default Home;
