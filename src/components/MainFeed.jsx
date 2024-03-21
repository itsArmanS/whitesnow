import React, { useState, useEffect } from "react";
import "../styles/homePanels.css"
import "../styles/homeLayout.css";
import PostList from "./PostList";

function MainFeed() {
  const [posts, setPosts] = useState([
    { user: "john", profileImage: "/images/default-user-image.png", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan in dui eu vestibulum. Mauris placerat placerat tellus nec finibus. Donec bibendum dolor non neque.", date: "04/20", id: 1 },
    { user: "albert", profileImage: "/images/default-user-image.png", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan in dui eu vestibulum. Mauris placerat placerat tellus nec finibus. Donec bibendum dolor non neque.", date: "04/21", id: 2 },
    { user: "ella", profileImage: "/images/default-user-image.png", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec accumsan in dui eu vestibulum. Mauris placerat placerat tellus nec finibus. Donec bibendum dolor non neque.", date: "04/31", id: 3 }
  ])

  return (
    <div className="main-feed">
      <PostList posts={posts} />
    </div>
  )
}

export default MainFeed