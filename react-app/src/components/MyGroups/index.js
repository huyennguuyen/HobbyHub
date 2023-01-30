import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import EditGroup from "../EditGroupForm/EditGroupForm";
import { Modal } from "../context/Modal";
import AllGroups from "../AllGroups";
import "./MyGroups.css"


function MyGroups() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const groupState = useSelector(state => state.groups)
    const groups = Object.values(groupState)
    console.log("THIS IS GROUPS------------------", groups)
    // const [showEditGroup, setShowEditGroup] = useState(false)


    useEffect(async() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) await dispatch(groupActions.getAllGroups(sessionUser.id))
    }, [sessionUser])

    // const deleteIndividualGroup = (group) => {
    //     dispatch(groupActions.removeGroup(group.id))
    // }

    // remember that groups.length is different from just groups and 
    // you removed the console.log from the navbar.js

    return (
        <div className="my-groups-container">
            <div className="my-groups-center">
                <h1 className="my-groups-header"> My Created Groups </h1>
                {groups && (
                groups?.map(group => 
                <AllGroups key={group.id} group={group}/>) )}
                {groups.length === 0 && (
                <div className="no-groups"> 
                    <h2 style={{fontSize: "35px"}}>Thank you for signing up!</h2>
                    <h3 style={{fontSize: "23px", marginBottom: "30px"}}>Get started by creating a group.</h3>
                    <button style={{color: "white", border: "none", backgroundColor: "#E86652", height: "28px", fontFamily: "PT Serif", fontSize: "15px", borderRadius: "3px" }}>Create a group</button>
                 </div>   
                )}
            </div>
        </div>
    );
}
export default MyGroups;