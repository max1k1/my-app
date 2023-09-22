import { React } from "react";
import UploadButtonControl from './../../../../common/UploadButtonControl/UploadButtonControl';
import photoArrow from "../../../../../assets/images/changeAvatarArrow.svg";

const ChangeProfilePhotoButton = ({ onProfilePhotoSelected }) => {
  return (
    <button className="changeProfilePhotoButton">
      <UploadButtonControl
        className="profilePhotoButton"
        onChange={onProfilePhotoSelected}
        accept="image/*"
      >
        <img src={photoArrow} alt="changeProfilePhotoButton" />
      </UploadButtonControl>
    </button>
  );
};

export default ChangeProfilePhotoButton;
