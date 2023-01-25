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

    return (
        <div className="my-groups-container">
            <div className="my-groups-center">
                <h1 className="my-groups-header"> My Created Groups </h1>
                {groups.length > 0 ? 
                 groups?.map(group => 
                 <AllGroups key={group.id} group={group}/>) :
                 <h2>hi</h2>    
                }
            </div>
        </div>
    );
}
export default MyGroups;