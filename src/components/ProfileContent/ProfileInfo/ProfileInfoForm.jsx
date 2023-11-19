import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import './ProfileInfo.css';
import { maxLengthCreator, required } from '../../../utils/validators/validators';
import { Input } from './../../common/FormsControls/FormsControls';
import ProfileButton from './../../common/Buttons/ProfileButton/ProfileButton';
import ChangeProfilePhotoButton from './../../common/Buttons/ChangeProfilePhotoButton/ChangeProfilePhotoButton';
import ProfileStatusWithHooks from './../ProfileStatus/ProfileStatusWithHooks';

const maxLength200 = maxLengthCreator(200);
const ProfileInfoForm = ({
  handleSubmit,
  profile,
  userPhoto,
  isOwner,
  onProfilePhotoSelected,
  status,
  updateStatus,
  initialValues,
}) => {
  const [lookingForAJobMark, setLookingForAJobMark] = useState(initialValues.lookingForAJob);
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
        <img src={profile.photos.large || userPhoto} alt="profileAva" className="profilePicture" />
        <ChangeProfilePhotoButton onProfilePhotoSelected={onProfilePhotoSelected} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
      </div>
      <form onSubmit={handleSubmit} className="profileInfoForm">
        <Field
          name="fullName"
          placeholder="Full name"
          component={Input}
          validate={[required, maxLength200]}
        />
        <Field
          name={'aboutMe'}
          placeholder="About me"
          component={Input}
          validate={[required, maxLength200]}
        />
        <div className="lookingForAJobArea">
          <span> Looking for a job:</span>
          <Field
            name={'lookingForAJob'}
            component={Input}
            type="checkbox"
            onClick={onLookingForAJobMarkChange}
          />
          {/* make sync lookingForAJobMark with Field lookingForAJob(probably with Formik it will be better) */}
        </div>
        {lookingForAJobMark && (
          <Field
            name={'lookingForAJobDescription'}
            placeholder="Looking for a job description"
            component={Input}
          />
        )}
        <div>
          <span className="contactsArea">
            Contacts:{' '}
            <Field
              name="contactsArea"
              component={Input}
              type="checkbox"
              onClick={toggleContactsChangeField}
            />
          </span>
          {contactsChangeField && 
            Object.keys(profile.contacts).map((key) => {
              return (
                <div key={key}>
                  {key}: <Field name={`contacts.${key}`} placeholder={key} component={Input} />
                </div>
              );
            })}
        </div>
        <div className="saveData">
        <ProfileButton name='Save'></ProfileButton>
        </div>
      </form>
    </div>
  );
};
export default reduxForm({ form: 'profile-info-edit-form' })(ProfileInfoForm);
