import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unFollow, setPage, setTotalUsersCount } from './../../redux/Users-reducer';
import Users from "./Users";

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
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;