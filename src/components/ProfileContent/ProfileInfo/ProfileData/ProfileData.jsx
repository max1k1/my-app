import React from "react";
import instagramLogoIcon from "../../../../assets/images/instagramLogoIcon.png";
import vkontakteLogoIcon from "../../../../assets/images/vkontakteLogoIcon.png";
import linkedinLogoIcon from "../../../../assets/images/linkedinLogoIcon.png";
import youtubeLogoIcon from "../../../../assets/images/youtubeLogoIcon.png";
import twitterLogoIcon from "../../../../assets/images/twitterLogoIcon.png";
import githubLogoIcon from "../../../../assets/images/githubLogoIcon.png";
import vMarkIcon from "../../../../assets/images/v-mark.png";
import xMarkIcon from "../../../../assets/images/x-mark.svg";
import Contact from "../ProfileInfoAssets/Contact/Contact";
import ChangeProfilePhotoButton from "../ProfileInfoAssets/ChangeProfilePhotoButton/ChangeProfilePhotoButton";
import ProfileStatusWithHooks from "../ProfileInfoAssets/ProfileStatus/ProfileStatusWithHooks";

const ProfileData = ({
  profile,
  isOwner,
  activateEditMode,
  onProfilePhotoSelected,
  status,
  updateStatus,
  userPhoto,
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
          <div>
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
            <ChangeProfilePhotoButton
              onProfilePhotoSelected={onProfilePhotoSelected}
            />
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

export default ProfileData;
