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
    const [state, setState] = useState()
    // console.log("this is groups state --------", groupState)
    // const [showEditGroup, setShowEditGroup] = useState(false)
    
    
    // useEffect(async() => {
        
    //     await dispatch(groupActions.clearingGroup())
        
    // }, )
    // console.log("THIS IS GROUPS------------------", groups)
    
    useEffect(async() => {
        if (!sessionUser) history.push('/')
        // if (sessionUser) await dispatch(groupActions.clearingGroup())
        if (sessionUser) await dispatch(groupActions.getGroupsHome())
    }, [sessionUser, dispatch])

    console.log("THIS IS GROUPS Second ------------------", groups)


    // useEffect(async() => {
     
    //     if (sessionUser) await dispatch(groupActions.clearingGroup())

    // }, [])



    // useEffect(() => {
    //     return () => {
    //         setState(); // This worked for me
    //       };

    // }, [])

    // const deleteIndividualGroup = (group) => {
    //     dispatch(groupActions.removeGroup(group.id))
    // }

    // remember that groups.length is different from just groups and 
    // you removed the console.log from the navbar.js
 
    return (
        <div className="my-groups-container">
            <div className="my-groups-center">
                <h1 className="my-groups-header"> My Created Groups </h1>
                {groups && (groups
                    ?.filter(group => group?.id === sessionUser?.id)
                     .map(group => 
                    <AllGroups key={group.id} group={group}/>) )}
                    {groups?.length === 0 && (
                    <div className="no-groups"> 
                        <h2 style={{fontSize: "35px"}}>Thank you for signing up!</h2>
                        <h3 style={{fontSize: "23px", marginBottom: "30px"}}>Get started by creating a group.</h3>
                        <NavLink to="/groups/new">
                        <button className="pointer"style={{color: "white", border: "none", backgroundColor: "#E86652", height: "28px", fontFamily: "PT Serif", fontSize: "15px", borderRadius: "3px" }}>Create a group</button>
                        </NavLink >
                    </div>   
                )}
            </div>
        </div>
    );
}
export default MyGroups;