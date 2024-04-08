import React from "react";
import "../styles/homePanels.css";
import "../styles/profileFeed.css"
import SnowflakeButton from "./SnowflakeButton";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import DeletePostButton from "./DeletePostButton";

function PostList({ posts, setRefresh }) {
  const { currentUser, currentUserID } = useContext(AuthContext);

  return (
    <>
      {posts.map((post) => (
        <div className="post-body" key={post.id}>
          <div className="post-user-data">
            <div className="post-user">
              <div>
                <div className="profile-image">
                  <img src={post.profileImage} alt="" />
                </div>
                <div className="user-username">
                  {`• @${currentUser} • `}
                </div>
                <div className="post-date">
                  {post.date}
                </div>
              </div>
              <div>
                {post.userID === currentUserID ?
                  <DeletePostButton postID={post.id} setRefresh={setRefresh} />
                  :
                  null
                }
              </div>
            </div>
            <div className="post-text">
              {post.body}
            </div>
          </div>
          <div className="post-user-buttons">
            <SnowflakeButton postID={post.id} />
          </div>
        </div>
      ))}
    </>
  );
}

export default PostList;
