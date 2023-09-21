import React, { useState } from "react";
import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Preloader";
import instagramLogoIcon from "../../../assets/images/instagramLogoIcon.png";
import vkontakteLogoIcon from "../../../assets/images/vkontakteLogoIcon.png";
import linkedinLogoIcon from "../../../assets/images/linkedinLogoIcon.png";
import youtubeLogoIcon from "../../../assets/images/youtubeLogoIcon.png";
import twitterLogoIcon from "../../../assets/images/twitterLogoIcon.png";
import githubLogoIcon from "../../../assets/images/githubLogoIcon.png";
import photoArrow from "../../../assets/images/changeAvatarArrow.svg";
import vMarkIcon from "../../../assets/images/v-mark.png";
import xMarkIcon from "../../../assets/images/x-mark.svg";
import { NavLink } from "react-router-dom";
import ProfileStatusWithHooks from "./ProfileStatus/ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileInfoForm from "./ProfileInfoForm";
import UploadButtonControl from "../../common/UploadButtonControl/UploadButtonControl";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  updateProfileInfo,
  updatePhoto,
  isOwner,
}) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };
  // const handleAddBanner = ({ target: { files } }) => {
  //   const loadedImage = files[0];

  // };
  const onSubmit = (formData) => {
    updateProfileInfo(formData).then(deactivateEditMode());
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  return (
    <div>
      {editMode ? (
        <div>
          <img
            src={profile.photos.large || userPhoto}
            alt="profileAva"
            className="profilePicture"
          />
          {isOwner && <input type="file" onChange={onProfilePhotoSelected} />}
          <ProfileInfoForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        </div>
      ) : (
        <ProfileData
          profile={profile}
          status={status}
          updateStatus={updateStatus}
          updateProfileInfo={updateProfileInfo}
          updatePhoto={updatePhoto}
          isOwner={isOwner}
          onProfilePhotoSelected={onProfilePhotoSelected}
          activateEditMode={activateEditMode}
        />
      )}
    </div>
  );
};
const ProfileData = ({
  profile,
  isOwner,
  activateEditMode,
  onProfilePhotoSelected,
  status,
  updateStatus,
}) => {
  const logoDataBase = {
    vk: vkontakteLogoIcon,
    twitter: twitterLogoIcon,
    instagram: instagramLogoIcon,
    youtube: youtubeLogoIcon,
    github: githubLogoIcon,
    mainLink: linkedinLogoIcon,
  };
  return (
    <div>
      <div className="profileDescription">
        <div>
          <div className="changeProfilePhotoField">
            <img
              src={profile.photos.large || userPhoto}
              alt="profileAva"
              className="profilePicture"
            />
            {isOwner && (
              <div className="editMode">
                <button onClick={activateEditMode}>Edit mode</button>
              </div>
            )}
            <button className="changeProfilePhotoButton">
              <UploadButtonControl
                className="profilePhotoButton"
                onChange={onProfilePhotoSelected}
                accept="image/*"
              >
                <img src={photoArrow} alt="changeProfilePhotoButton" />
              </UploadButtonControl>
            </button>
          </div>
          <div className="profileStatus">
            <ProfileStatusWithHooks
              status={status}
              updateStatus={updateStatus}
              isOwner={isOwner}
            />
          </div>
        </div>
        <div className="secondArea">
          <span className="fullName">{profile.fullName}</span>
          <div className="lookingForAJob">
            {" "}
            <span>
              Looking for a job:{" "}
              {profile.lookingForAJob ? (
                <img src={vMarkIcon} alt="checkBoxIcon" />
              ) : (
                <img src={xMarkIcon} alt="checkBoxIcon" />
              )}
            </span>
            {profile.lookingForAJob && (
              <span>
                My professional skills: {profile.lookingForAJobDescription}
              </span>
            )}
            {/* <span className="AboutMe">{profile.aboutMe}</span> */}
          </div>
        </div>
        <div className="thirdArea">
          {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactLogo={logoDataBase[key]}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Contact = ({ contactValue, contactLogo }) => {
  if (!!contactValue) {
    return (
      <div>
        <NavLink to={contactValue}>
          {<img src={contactLogo} alt="Icon" />}
        </NavLink>
      </div>
    );
  }
  return;
};

export default ProfileInfo;
