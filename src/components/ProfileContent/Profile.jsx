import React from "react";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
  // const Person1 ={
  //   name: "Pip",
  //   lastName: "Hue",
  //   age: 20,
  //   blood: [3, 4]
  // }
  // const something = "2q3123"
  // const {name} = Person1;

  // console.log(Person1)
  // console.log(name)
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer  />
    </div>
  );
};
export default Profile;
