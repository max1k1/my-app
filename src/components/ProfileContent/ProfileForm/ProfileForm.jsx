import React, { useState } from 'react';
import { Field, reduxForm } from 'redux-form';
import styles from './ProfileForm.module.css';
import { maxLengthCreator, required } from '../../../utils/validators/validators.ts';
import { Checkbox, Input } from '../../common/FormsControls/FormsControls.tsx'
import ProfileStatusWithHooks from '../ProfileStatus/ProfileStatusWithHooks.tsx';
import MainButton from '../../common/Buttons/MainButton/MainButton';
import UploadButtonControl from '../../common/UploadButtonControl/UploadButtonControl';
import FormContacts from '../Contacts/FormContacts/FormContacts';

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
    <div>
      <form onSubmit={handleSubmit} className={styles.profileInfoForm}>
        <div className={styles.mainFormArea}>
          <div className={styles.profilePhotoArea}>
            <div className={styles.changeProfilePhotoField}>
              <div>
                <UploadButtonControl
                  className={styles.profilePhotoButton}
                  onChange={onProfilePhotoSelected}
                  accept="image/*">
                  <img
                    src={profile.photos.large || userPhoto}
                    alt="profileAva"
                    className={styles.profilePicture}
                  />
                </UploadButtonControl>
              </div>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
          </div>
          <div className={styles.inputFormArea}>
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
            <div className={styles.lookingForAJobArea}>
              <div> Looking for a job:</div>
              <Field
                name={'lookingForAJob'}
                component={Checkbox}
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
            <div className={styles.contactsMarkArea}>
              Contacts:
              <Field
                name="contactsArea"
                component={Checkbox}
                type="checkbox"
                onClick={toggleContactsChangeField}
              />
            </div>
          </div>
        </div>
        <div className={styles.contactsArea}>
          {contactsChangeField && <FormContacts contacts={profile.contacts} />}
        </div>
        <div className={styles.saveButton}>
          <MainButton name="Save"></MainButton>
        </div>
      </form>
    </div>
  );
};
export default reduxForm({ form: 'profile-info-edit-form' })(ProfileInfoForm);
