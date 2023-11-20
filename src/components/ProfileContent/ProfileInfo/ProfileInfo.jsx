import React, { useState } from "react";
// import "./ProfileInfo.css";
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/userPhoto.png";
import ProfileInfoForm from "./ProfileInfoForm";
import ProfileData from "./ProfileData/ProfileData";

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
        <div >
          <ProfileInfoForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
            userPhoto={userPhoto}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            updateProfileInfo={updateProfileInfo}
            updatePhoto={updatePhoto}
            onProfilePhotoSelected={onProfilePhotoSelected}
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
          userPhoto={userPhoto}
        />
      )}
    </div>
  );
};

export default ProfileInfo;
