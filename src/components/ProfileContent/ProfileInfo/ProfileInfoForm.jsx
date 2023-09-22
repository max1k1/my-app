import React, { useState } from "react";
import { Field, reduxForm } from "redux-form";
import "./ProfileInfo.css";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input } from "./../../common/FormsControls/FormsControls";
import ProfileStatusWithHooks from "./ProfileInfoAssets/ProfileStatus/ProfileStatusWithHooks";
import ChangeProfilePhotoButton from "./ProfileInfoAssets/ChangeProfilePhotoButton/ChangeProfilePhotoButton";

const maxLength200 = maxLengthCreator(200);
const ProfileInfoForm = ({
  handleSubmit,
  profile,
  userPhoto,
  isOwner,
  onProfilePhotoSelected,
  status,
  updateStatus,
}) => {
  const [lookingForAJobMark, setLookingForAJobMark] = useState(false);
  const [contactsChangeField, setContactsChangeField] = useState(false);
  const onLookingForAJobMarkChange = () => {
    if (!lookingForAJobMark) {
      return setLookingForAJobMark(true);
    }
    setLookingForAJobMark(false);
  };
  const toggleContactsChangeField = () => {
    if (!contactsChangeField) {
      return setContactsChangeField(true);
    }
    setContactsChangeField(false);
  };
  return (
    <div className="changeProfileInfoForm">
      <div className="changeProfilePhotoField">
        <img
          src={profile.photos.large || userPhoto}
          alt="profileAva"
          className="profilePicture"
        />
        <ChangeProfilePhotoButton
          onProfilePhotoSelected={onProfilePhotoSelected}
        />
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
          isOwner={isOwner}
        />
      </div>
      <form onSubmit={handleSubmit} className="profileInfoForm">
        <Field
          className="formItem"
          name="fullName"
          placeholder="Full name"
          component={Input}
          validate={[required, maxLength200]}
        />
        <Field
          name={"aboutMe"}
          placeholder="About me"
          component={Input}
          validate={[required, maxLength200]}
        />
        <div className="lookingForAJobArea">
          <span> Looking for a job:</span>
          <Field
            name={"lookingForAJob"}
            component={Input}
            type="checkbox"
            onClick={onLookingForAJobMarkChange}
          />{" "}
        </div>
        {lookingForAJobMark && (
          <Field
            name={"lookingForAJobDescription"}
            placeholder="Looking for a job description"
            component="input"
          />
        )}
        <div>
          <span className="contactsArea">
            Contacts:{" "}
            <Field
              component={Input}
              type="checkbox"
              onClick={toggleContactsChangeField}
            ></Field>
          </span>
          {contactsChangeField &&
            Object.keys(profile.contacts).map((key) => {
              return (
                <div key={key}>
                  {key}: <Field name={`contacts.${key}`} component={Input} />
                </div>
              );
            })}
        </div>
        <button>Save</button>
      </form>
    </div>
  );
};
export default reduxForm({ form: "profile-info-edit-form" })(ProfileInfoForm);
