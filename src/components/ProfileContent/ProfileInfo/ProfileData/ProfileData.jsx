import React from 'react';
// import vMarkIcon from '../../../../assets/images/v-mark.png';
// import xMarkIcon from '../../../../assets/images/x-mark.svg';
import defalutBackground from '../../../../assets/images/defaultBackground.png';
import ProfileStatusWithHooks from './../../ProfileStatus/ProfileStatusWithHooks';
import MainButton from '../../../common/Buttons/MainButton/MainButton';
import styles from '../ProfileInfo.module.css';
import UploadButtonControl from '../../../common/UploadButtonControl/UploadButtonControl';
import MyPostsContainer from '../../MyPosts/MyPostsContainer';
import Contacts from '../../Contacts/InfoContacts/Contacts';
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
    <div className={styles.pageLayout}>
      <div className={styles.profileHeaderLayout}>
        <div className={styles.profileBackground}>
          <img src={defalutBackground} alt="defalutBackground" />
        </div>
        <div className={styles.profileHeader}>
          {isOwner ? (
            <div className={styles.changeProfilePhotoButton}>
              <button>
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
              </button>
            </div>
          ) : (
            <div>
              <img
                src={profile.photos.large || userPhoto}
                alt="profileAva"
                className={styles.profilePicture}
              />
            </div>
          )}
          <div className={styles.profileHeaderInfo}>
          <div className={styles.profileStatus}>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} isOwner={isOwner} />
          </div>
          {isOwner ? (
            <div className={styles.editMode} onClick={activateEditMode}>
              <MainButton name="Edit profile"></MainButton>
            </div>
          ) : (
            <div />
          )}
          </div>
        </div>
      </div>
      <div className={styles.profileBodyLayout}>
        <div className={styles.profilePosts}>
          <MyPostsContainer isOwner={isOwner} />
        </div>
        <Contacts contacts={profile.contacts} />
      </div>
    </div>
  );
};

export default ProfileData;

// return (
//   <div>
//     <div className="profileDescription">
//       <div>
//         <div className="firstArea">
//           <img
//             src={profile.photos.large || userPhoto}
//             alt="profileAva"
//             className="profilePicture"
//           />
//           {isOwner && (
//             <div>
//               <div className="editMode" onClick={activateEditMode}>
//                 <MainButton name='Edit profile'></MainButton>
//               </div>{" "}
//               <ChangeProfilePhotoButton
//                 onProfilePhotoSelected={onProfilePhotoSelected}
//               />
//             </div>
//           )}
//         </div>
//         <div className="profileStatus">
//           <ProfileStatusWithHooks
//             status={status}
//             updateStatus={updateStatus}
//             isOwner={isOwner}
//           />
//         </div>
//       </div>
//       <div className="secondArea">
//         <span className="fullName">{profile.fullName}</span>
//         <div className="lookingForAJob">
//           {" "}
//           <span>
//             Looking for a job:{" "}
//             {profile.lookingForAJob ? (
//               <img src={vMarkIcon} alt="checkBoxIcon" />
//             ) : (
//               <img src={xMarkIcon} alt="checkBoxIcon" />
//             )}
//           </span>
//           {profile.lookingForAJob && (
//             <span>
//               My professional skills: {profile.lookingForAJobDescription}
//             </span>
//           )}
//           {/* <span className="AboutMe">{profile.aboutMe}</span> */}
//         </div>
//       </div>
//       <div className="thirdArea">
//         <Contacts contacts={profile.contacts}/>
//       </div>
//     </div>
//   </div>
// );
// };
