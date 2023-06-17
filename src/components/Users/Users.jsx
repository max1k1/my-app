import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/images/userPhoto.png"

class Users extends React.Component{
  componentDidMount(){
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`)
    .then(response=>{
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
    });
  };
  onPageChanged = (pageNumber)=>{
    this.props.setPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`)
    .then(response=>{
      this.props.setUsers(response.data.items)  
    });
  }
  render(){
    let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
    let pages =[];
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
    return<div>
      <div>
        {
          pages.map(p =>{
            return<span className={p===this.props.currentPage && styles.selectedPageNumber}
            onClick={(e)=>{this.onPageChanged(p)}}
            >{p}</span>
          })
        }
      </div>
  {this.props.usersDate.map(u => (
    <div key={u.userId} className={styles.users}>
      <span className={styles.user}>
        <div className={styles.firstArea}>
          <img
            className={styles.ava}
            src={u.photos.small?u.photos.small:userPhoto}
            alt="avatar"
          />
          <div>
            {u.followed ? 
              <button onClick={() => {this.props.unFollow(u.id)}}>Unfollow</button>
            : 
              <button onClick={()=> {this.props.follow(u.id)}}>Follow</button>
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
}
}
export default Users;
