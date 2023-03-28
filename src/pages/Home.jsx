import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FeedCollection from "../components/FeedCollection";
import PostInputModal from "../components/PostInputModal";
import ViewParticipents from "../components/ViewParticipants";
import DashboardLayout from "../layouts/DashboardLayout";
import HeaderLayout from "../layouts/HeaderLayout";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  return (
    // <HeaderLayout>
    <DashboardLayout>
      <div className="bg-light">
        <div className="text-center py-4">
          <Button variant="primary" onClick={handleShow}>
            Create Post +
          </Button>
        </div>
        <FeedCollection />
        <ViewParticipents />
      </div>
      <PostInputModal {...{ show, setShow }} />
    </DashboardLayout>
    // </HeaderLayout>
  );
};

export default Home;
