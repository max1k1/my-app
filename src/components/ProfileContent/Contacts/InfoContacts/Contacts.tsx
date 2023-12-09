import { NavLink } from 'react-router-dom';
import instagramLogoIcon from '../../../../assets/images/logos/instagramLogoIcon.png';
import vkontakteLogoIcon from '../../../../assets/images/logos/vkontakteLogoIcon.png';
import linkedinLogoIcon from '../../../../assets/images/logos/linkedinLogoIcon.png';
import youtubeLogoIcon from '../../../../assets/images/logos/youtubeLogoIcon.png';
import twitterLogoIcon from '../../../../assets/images/logos/twitterLogoIcon.png';
import githubLogoIcon from '../../../../assets/images/logos/githubLogoIcon.png';
import facebookLogoIcon from '../../../../assets/images/logos/facebook.jpg';
import websiteIcon from '../../../../assets/images/logos/randomWebsiteIcon.jpg' 
import styles from './Contacts.module.css';
import React from 'react';
const Contacts = ({ contacts }) => {
  const logoDataBase = {
    facebook: facebookLogoIcon,
    github: githubLogoIcon,
    instagram: instagramLogoIcon,
    mainLink: linkedinLogoIcon,
    twitter: twitterLogoIcon,
    vk: vkontakteLogoIcon,
    website: websiteIcon,
    youtube: youtubeLogoIcon,
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
