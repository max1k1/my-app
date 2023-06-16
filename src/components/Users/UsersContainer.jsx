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
        follow: (id) =>{
            dispatch(follow(id));
        },
        unFollow: (id)=>{
            dispatch(unFollow(id));
        },
        setUsers: (users)=>{
            dispatch(setUsers(users));
        }
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps) (Users);
export default UsersContainer;