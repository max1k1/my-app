import { React } from "react";
import photoArrow from "../../../../assets/images/uploadIcon.png"
import styles from "./ChangeProfilePhotoButton.module.css"
import UploadButtonControl from './../../UploadButtonControl/UploadButtonControl';

const ChangeProfilePhotoButton = ({ onProfilePhotoSelected }) => {
  return (
    <button className={styles.changeProfilePhotoButton}>
      <UploadButtonControl
        className={styles.profilePhotoButton}
        onChange={onProfilePhotoSelected}
        accept="image/*"
      >
        <img src={photoArrow} alt="changeProfilePhotoButton" />
      </UploadButtonControl>
    </button>
  );
};

export default ChangeProfilePhotoButton;
