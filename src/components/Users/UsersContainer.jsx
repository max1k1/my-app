import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setPage, setTotalUsersCount } from './../../redux/Users-reducer';
import Users from "./Users";
import axios from "axios";

class UsersContainer extends React.Component{
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
    return<Users totalUsersCount={this.props.totalUsersCount}
    currentPage={this.props.currentPage}
    pageSize={this.props.pageSize}
    usersDate={this.props.usersDate}
    follow={this.props.follow}
    unFollow={this.props.unFollow}  
    onPageChanged={this.onPageChanged}
    />
}
}
const mapStateToProps = (state)=>{
    return{ 
        usersDate: state.usersPage.usersDate,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        follow: (id) =>{
            dispatch(follow(id));
        },
        unFollow: (id)=>{
            dispatch(unFollow(id));
        },
        setUsers: (users)=>{
            dispatch(setUsers(users));
        },
        setPage: (pageNumber)=>{
            dispatch(setPage(pageNumber)); 
        },
        setTotalUsersCount: (totalUsersCount)=>{
            dispatch(setTotalUsersCount(totalUsersCount));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);