import React, { useEffect } from "react";
import { collectionGroup, getDocs, limit, query } from "firebase/firestore";
import PostFeed from "./PostFeed";
// import { feedCollection } from "../Data/feedCollection";
import { db } from "../firebase";

function FeedCollection() {
  const [feedCollection, setFeedCollection] = React.useState([]);

  useEffect(() => {
    async function callBack() {
      const postsRef = collectionGroup(db, "posts");
      const lastThreeRes = query(postsRef, limit(8));
      const querySnapshot = await getDocs(lastThreeRes);
      const postData = [];
      querySnapshot.forEach((doc) =>
        postData.push({ ...doc.data(), id: doc.id })
      );
      console.log("postData", postData);
      setFeedCollection(postData);
    }
    callBack();
  }, []);

  return (
    <div className="py-4">
      {feedCollection.map((feed, index) => (
        <PostFeed key={index} post={feed} />
      ))}
    </div>
  );
}

export default FeedCollection;
