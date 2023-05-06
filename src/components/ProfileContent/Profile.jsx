import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({store, dispatch}) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={store} dispatch={dispatch} />
    </div>
  );
};
export default Profile;
