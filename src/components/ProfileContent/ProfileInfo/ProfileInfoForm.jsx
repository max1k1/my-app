import React from "react";
import { Field, reduxForm } from "redux-form";
import "./ProfileInfo.css";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Input } from "./../../common/FormsControls/FormsControls";

const maxLength200 = maxLengthCreator(200);
const ProfileInfoForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
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
      <Field name={"lookingForAJob"} component={Input} type="checkbox" />
      <Field
        name={"lookingForAJobDescription"}
        placeholder="Looking for a job description"
        component={Input}
        validate={[required, maxLength200]}
      />
      <span>Contacts:</span>
      {Object.keys(profile.contacts).map((key) => {
        return (
          <div key={key}>
            {key}: <Field name={`contacts.${key}`} component={Input} />
          </div>
        );
      })}
      <button>Save</button>
    </form>
  );
};
export default reduxForm({ form: "profile-info-edit-form" })(ProfileInfoForm);
// make prety Edit mode 

// const ProfileInfoForm = ({
//   profile,
//   isOwner,
//   activateEditMode,
//   onProfilePhotoSelected,
//   status,
//   updateStatus,
// }) => {
//   const logoDataBase = {
//     vk: vkontakteLogoIcon,
//     twitter: twitterLogoIcon,
//     instagram: instagramLogoIcon,
//     youtube: youtubeLogoIcon,
//     github: githubLogoIcon,
//     mainLink: linkedinLogoIcon,
//   };
//   return (
//     <div>
//       <div className="profileDescription">
//         <div>
//           <div className="changeProfilePhotoField">
//             <img
//               src={profile.photos.large || userPhoto}
//               alt="profileAva"
//               className="profilePicture"
//             />
//             {isOwner && (
//               <div className="editMode">
//                 <button onClick={activateEditMode}>Edit mode</button>
//               </div>
//             )}
//             <button className="changeProfilePhotoButton">
//               <UploadButtonControl
//                 className="profilePhotoButton"
//                 onChange={onProfilePhotoSelected}
//                 accept="image/*"
//               >
//                 <img src={photoArrow} alt="changeProfilePhotoButton" />
//               </UploadButtonControl>
//             </button>
//           </div>
//           <div className="profileStatus">
//             <ProfileStatusWithHooks
//               status={status}
//               updateStatus={updateStatus}
//               isOwner={isOwner}
//             />
//           </div>
//         </div>
//         <div className="secondArea">
//           <span className="fullName">{profile.fullName}</span>
//           <div className="lookingForAJob">
//             {" "}
//             <span>
//               Looking for a job:{" "}
//               {profile.lookingForAJob ? (
//                 <img src={vMarkIcon} alt="checkBoxIcon" />
//               ) : (
//                 <img src={xMarkIcon} alt="checkBoxIcon" />
//               )}
//             </span>
//             {profile.lookingForAJob && (
//               <span>
//                 My professional skills: {profile.lookingForAJobDescription}
//               </span>
//             )}
//             {/* <span className="AboutMe">{profile.aboutMe}</span> */}
//           </div>
//         </div>
//         <div className="thirdArea">
//           {Object.keys(profile.contacts).map((key) => {
//             return (
//               <Contact
//                 key={key}
//                 contactLogo={logoDataBase[key]}
//                 contactTitle={key}
//                 contactValue={profile.contacts[key]}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };
// const Contact = ({ contactValue, contactLogo }) => {
//   if (!!contactValue) {
//     return (
//       <div>
//         <NavLink to={contactValue}>
//           {<img src={contactLogo} alt="Icon" />}
//         </NavLink>
//       </div>
//     );
//   }
//   return;
// };