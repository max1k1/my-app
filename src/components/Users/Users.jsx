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
  if (usersDate.length===0) {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response=>{
      setUsers(response.data.items)
    });
  }
  return<div className={styles.usersList}>
      {usersDate.map(u => (
        <div key={u.userId} className={styles.users}>
          <span className={styles.user}>
            <div className={styles.firstArea}>
              <img
                className={styles.ava}
                src={u.photos.small}
                alt="avatar"
              />
              <div>
                {u.followed ? 
                  <button onClick={() => {unFollow(u.id)}}>Unfollow</button>
                : 
                  <button onClick={()=>{follow(u.id)}}>Follow</button>
                }
              </div>
            </div>
            <div className={styles.secondArea}>
              <div className={styles.thirdArea}>
                <div className={styles.name}>{u.name}</div>
                <div className={styles.status}>{u.status}</div>
              </div>
              <div className={styles.livingPlace}>
                <div>{"`${u.livingPlace.country}`"}</div>
                <div>{"`${u.livingPlace.city}`"}</div>
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
};
export default Users;
// className={followStatus => followStatus.isActive?styles.active:styles.button}
