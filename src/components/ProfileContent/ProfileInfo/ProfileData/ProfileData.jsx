import React from "react";

import vMarkIcon from "../../../../assets/images/v-mark.png";
import xMarkIcon from "../../../../assets/images/x-mark.svg";
import ProfileButton from './../../../common/Buttons/ProfileButton/ProfileButton';
import ChangeProfilePhotoButton from './../../../common/Buttons/ChangeProfilePhotoButton/ChangeProfilePhotoButton';
import ProfileStatusWithHooks from './../../ProfileStatus/ProfileStatusWithHooks';
import Contacts from '../../Contacts/Contacts';

const ProfileData = ({
  profile,
  isOwner,
  activateEditMode,
  onProfilePhotoSelected,
  status,
  updateStatus,
  userPhoto,
}) => {

  return (
    <div>
      <div className="profileDescription">
        <div>
          <div className="firstArea"> 
            <img
              src={profile.photos.large || userPhoto}
              alt="profileAva"
              className="profilePicture"
            />
            {isOwner && (
              <div>
                <div className="editMode" onClick={activateEditMode}>
                  <ProfileButton name='Edit profile'></ProfileButton>
                </div>{" "}
                <ChangeProfilePhotoButton
                  onProfilePhotoSelected={onProfilePhotoSelected}
                />
              </div>
            )}
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
          <Contacts contacts={profile.contacts}/>
          {/* {Object.keys(profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactLogo={logoDataBase[key]}
                contactTitle={key}
                contactValue={profile.contacts[key]}
              />
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ProfileData;
