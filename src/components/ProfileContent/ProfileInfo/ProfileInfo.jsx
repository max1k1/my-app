import React from "react";
import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Preloader";
import instagramLogoIcon from "../../../assets/images/instagramLogoIcon.png";
import vkontakteLogoIcon from "../../../assets/images/vkontakteLogoIcon.png";
import linkedinLogoIcon from "../../../assets/images/linkedinLogoIcon.png";
import youtubeLogoIcon from "../../../assets/images/youtubeLogoIcon.png";
import twitterLogoIcon from "../../../assets/images/twitterLogoIcon.png";
import githubLogoIcon from "../../../assets/images/githubLogoIcon.png";
import photoArrow from "../../../assets/images/changeAvatarArrow.svg"
import { NavLink } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";
const ProfileInfo = ({
  updatePhoto,
  isOwner,
  profile,
  status,
  updateStatus,
}) => {
  if (!profile) {
    return <Preloader />;
  }
  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };
  const fakeEditMode=false;
  return (
    <div>
      <div className="firstArea">
        <div>
          <img
            src={profile.photos.large || userPhoto}
            alt="profileAva"
            className="profilePicture"
          />
          <div className="changeProfilePhotoField" >
          {/* <img
            src={photoArrow}
          />  */}
            { isOwner && <input type="file" onChange={onProfilePhotoSelected} input/>}
          </div>
        </div>
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
      <ProfileStatusWithHooks
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
      />
    </div>
  );
};

export default ProfileInfo;
