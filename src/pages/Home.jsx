import React, { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
// import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../firebase";
import FeedCollection from "../components/FeedCollection";
import PostInputModal from "../components/PostInputModal";
import ViewParticipents from "../components/ViewParticipants";
import DashboardLayout from "../layouts/DashboardLayout";
// import HeaderLayout from "../layouts/HeaderLayout";

import photo from "../assets/photo.png";
import video from "../assets/video.png";
import event from "../assets/event.png";
import article from "../assets/article.png";

import "./Home.css";

function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { id } = useParams();
  const navigate = useNavigate();

  const [profileData, setProfileData] = React.useState({
    name: "",
    profession: "",
    location: "",
    bio: "",
    image: "",
  });

  useEffect(() => {
    const userDetails = async () => {
      const docRef = collection(db, "users");
      const q = query(docRef, where("uid", "==", id));
      const docSnap = await getDocs(q);

      if (docSnap.empty) {
        console.log("No matching documents.");
        navigate("/social");
      } else {
        // eslint-disable-next-line no-shadow
        docSnap.forEach((doc) => {
          setProfileData(doc.data());
        });
      }
    };
    userDetails();
  }, []);

  return (
    // <HeaderLayout>
    <DashboardLayout>
      <div className="bg-light">
        <div className="text-center py-4 row">
          <div style={{ width: "max-content", margin: "auto" }}>
            <div className="col">
              <img
                src={profileData.image}
                className="img-fluid rounded-circle"
                style={{
                  height: "40px",
                  width: "40px",
                  objectFit: "cover",
                }}
                width={100}
                height={100}
                alt="profile-pic"
              />
              <input
                className="post-content rounded-5"
                placeholder="Start a post"
                type="text"
                alt="post content"
              />
            </div>
            <div className="post-icons">
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={photo} alt="photos" />
                <h6>Photo</h6>
              </div>
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={video} alt="video" />
                <h6>Video</h6>
              </div>
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={event} alt="event" />
                <h6>Event</h6>
              </div>
              <div className="post-icon-div rounded-5">
                <img className="post-icon" src={article} alt="write article" />
                <h6>Write Article</h6>
              </div>
            </div>
            {/* <Button variant="primary" onClick={handleShow}>
            Create Post +
          </Button> */}
          </div>
        </div>
        <FeedCollection />
        <ViewParticipents />
      </div>
      <PostInputModal {...{ show, setShow }} />
    </DashboardLayout>
    // </HeaderLayout>
  );
}

export default Home;
