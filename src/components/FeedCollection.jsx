import React, { useEffect } from "react";
import PostFeed from "./PostFeed";
// import { feedCollection } from "../Data/feedCollection";
import { db } from "../firebase";
import { collection, getDocs, limit, query } from "firebase/firestore";

const FeedCollection = () => {
  const [feedCollection, setFeedCollection] = React.useState([]);

  useEffect(() => {
    callBack();
    async function callBack() {
      const postsRef = collection(db, "posts");
      const lastThreeRes = query(postsRef, limit(3));
      const querySnapshot = await getDocs(lastThreeRes);
      const postData = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        postData.push(doc.data());
      });
      setFeedCollection(postData);
    }
  }, []);

  return (
    <div className="py-4">
      {feedCollection.map((feed, index) => (
        <PostFeed key={index} post={feed} />
      ))}
    </div>
  );
};

export default FeedCollection;
