import React from "react";
import './Profile.css';
import MyPosts from './MyPosts/MyPosts.jsx';  

const Profile = () =>{
    return <div className="Profile">
    <img src="https://dhjhkxawhe8q4.cloudfront.net/penguinteen-wp/wp-content/uploads/2021/12/17142625/Screen-Shot-2020-11-04-at-3.39.40-PM.png" />
    <div>ava + discrtiption</div>
    <MyPosts/>
  </div>
}

export default Profile;