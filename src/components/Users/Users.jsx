import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
// usersDate: [
//     {
//       userId: 1,
//       fullName: "Vira",
//       status: "Some status",
//       livingPlace: { city: "Lviv", country: "Ukraine" },
//       avatar: "",
//       followStatus: false,
//     },
let Users = ({ usersDate, follow, unFollow, setUsers }) => {
  // axios.get('https://social-network.samuraijs.com/api/1.0')
  debugger
  if (usersDate.length===0) {
    setUsers([{
      userId: 1,
      fullName: "Vira",
      status: "Some status",
      livingPlace: { city: "Lviv", country: "Ukraine" },
      avatar: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2012/11/AMC-Breaking_Bad-5_1437.jpg",
      followStatus: false,
    },
    {
      userId: 2,
      fullName: "Karina",
      status: "Dvi",
      livingPlace: { city: "Kharkiv", country: "Ukraine" },
      avatar: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2012/11/AMC-Breaking_Bad-5_1437.jpg",
      followStatus: false,
    },
    {
      userId: 3,
      fullName: "Maksym",
      status: "P2p",
      livingPlace: { city: "Zaprizhga", country: "Ukraine" },
      avatar: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2012/11/AMC-Breaking_Bad-5_1437.jpg",
      followStatus: true,
    },
    {
      userId: 4,
      fullName: "Anastasiia",
      status: "Hey",
      livingPlace: { city: "Odesa", country: "Ukraine" },
      avatar: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2012/11/AMC-Breaking_Bad-5_1437.jpg",
      followStatus: true,
    },
    {
      userId: 5,
      fullName: "Biliy",
      status: "gco",
      livingPlace: { city: "Kiev", country: "Ukraine" },
      avatar: "https://d21yqjvcoayho7.cloudfront.net/wp-content/uploads/2012/11/AMC-Breaking_Bad-5_1437.jpg",
      followStatus: false,
    },])
  }
  return<div className={styles.usersList}>
      {usersDate.map(u => (
        <div key={u.userId} className={styles.users}>
          <span className={styles.user}>
            <div className={styles.firstArea}>
              <img
                className={styles.ava}
                src={u.avatar}
                alt="avatar"
              />
              <div>
                {u.followStatus ? 
                  <button onClick={() => {unFollow(u.userId)}}>Unfollow</button>
                : 
                  <button onClick={()=>{follow(u.userId)}}>Follow</button>
                }
              </div>
            </div>
            <div className={styles.secondArea}>
              <div className={styles.thirdArea}>
                <div className={styles.name}>{u.fullName}</div>
                <div className={styles.status}>{u.status}</div>
              </div>
              <div className={styles.livingPlace}>
                <div>{`${u.livingPlace.country}`}</div>
                <div>{`${u.livingPlace.city}`}</div>
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
};
export default Users;
// className={followStatus => followStatus.isActive?styles.active:styles.button}
