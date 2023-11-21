import { React } from 'react';
import { NavLink } from 'react-router-dom';
import instagramLogoIcon from '../../../../assets/images/instagramLogoIcon.png';
import vkontakteLogoIcon from '../../../../assets/images/vkontakteLogoIcon.png';
import linkedinLogoIcon from '../../../../assets/images/linkedinLogoIcon.png';
import youtubeLogoIcon from '../../../../assets/images/youtubeLogoIcon.png';
import twitterLogoIcon from '../../../../assets/images/twitterLogoIcon.png';
import githubLogoIcon from '../../../../assets/images/githubLogoIcon.png';
import styles from './Contacts.module.css';
const Contacts = ({ contacts }) => {
  const logoDataBase = {
    vk: vkontakteLogoIcon,
    twitter: twitterLogoIcon,
    instagram: instagramLogoIcon,
    youtube: youtubeLogoIcon,
    github: githubLogoIcon,
    mainLink: linkedinLogoIcon,
  };
  return (
    <div className={styles.contacts}>
      {Object.keys(contacts).map((key) => {
        if (contacts[key]) {
          return (
            <div className={styles.singleContact} key={key}>
              <NavLink to={contacts[key]}>{<img src={logoDataBase[key]} alt="Icon" />}</NavLink>
            </div>
          );
        } else {
          return false;
        }
      })}
    </div>
  );
};

export default Contacts;
