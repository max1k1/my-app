import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Preloader";
import instagramLogoIcon from "../../../assets/images/instagramLogoIcon.png";
import vkontakteLogoIcon from "../../../assets/images/vkontakteLogoIcon.png";
import linkedinLogoIcon from "../../../assets/images/linkedinLogoIcon.png";
import youtubeLogoIcon from "../../../assets/images/youtubeLogoIcon.png";
import twitterLogoIcon from "../../../assets/images/twitterLogoIcon.png";
import githubLogoIcon from "../../../assets/images/githubLogoIcon.png"
import { NavLink } from "react-router-dom";
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      {/* <img src="https://dhjhkxawhe8q4.cloudfront.net/penguinteen-wp/wp-content/uploads/2021/12/17142625/Screen-Shot-2020-11-04-at-3.39.40-PM.png" /> */}
      <div className="firstArea">
        <img
          src={profile.photos.large}
          alt="profileAva"
          className="profilePicture"
        />
        <div className="secondArea">
          <span className="fullName">{profile.fullName}</span>
          <span className="lookingForAJobDescription">
            {profile.lookingForAJobDescription}
          </span>
        </div>
        <div className="thirdArea">
          <NavLink to={profile.contacts.instagram}>
            <img src={instagramLogoIcon} alt="instagramLogoIcon" />
          </NavLink>
          <NavLink to={profile.contacts.vk}>
            <img src={vkontakteLogoIcon} alt="vkontakteLogoIcon" />
          </NavLink>
          <NavLink to="https://www.linkedin.com/in/maksym-boiko-3440a6227/">
            <img src={linkedinLogoIcon} alt="linkedinLogoIcon" />
          </NavLink>
          <NavLink to={profile.contacts.youtube}>
            <img src={youtubeLogoIcon} alt="youtubeLogoIcon" />
          </NavLink>
          <NavLink to={profile.contacts.twitter}>
            <img src={twitterLogoIcon} alt="twitterLogoIcon" />
          </NavLink>
          <NavLink to={profile.contacts.github}>
            <img src={githubLogoIcon} alt="githubLogoIcon" />
          </NavLink>
        </div>
      </div>
      <ProfileStatus status={status} updateStatus={updateStatus}/>
    </div>
  );
};

export default ProfileInfo;
