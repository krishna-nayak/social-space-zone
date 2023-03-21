import React from "react";
import PostFeed from "./PostFeed";
import { feedCollection } from "../Data/feedCollection";

const FeedCollection = () => {
  return (
    <div className="py-4">
      {feedCollection.map((feed) => (
        <PostFeed key={feed.id} post={feed} />
      ))}
    </div>
  );
};

export default FeedCollection;
