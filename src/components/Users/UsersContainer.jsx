import React from "react";
import { connect } from 'react-redux';
import { follow, setUsers, unFollow } from './../../redux/Users-reducer';
import Users from "./Users";

const mapStateToProps = (state)=>{
    return{ 
        usersDate: state.usersPage.usersDate
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        follow: (userId) =>{
            dispatch(follow(userId));
        },
        unFollow: (userId)=>{
            dispatch(unFollow(userId));
        },
        setUsers: (users)=>{
            dispatch(setUsers(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;