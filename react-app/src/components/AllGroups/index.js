import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import EditGroup from "../EditGroupForm/EditGroupForm";
import DeleteGroup from "../DeleteGroup";
import { Modal } from "../context/Modal";
import {FiMoreHorizontal} from "react-icons/fi"
// import AllGroups from "../AllGroups";
import "./AllGroups.css"

export default function AllGroups ({group}){
    const dispatch = useDispatch()

    const [showEditGroup, setShowEditGroup] = useState(false)
    const [showDeleteGroup, setShowDeleteGroup] = useState(false)

    // const deleteIndividualGroup = async (group) => {
    //     await dispatch(groupActions.removeGroup(group.id))
    // }

    return (
        <>
        <div className="my-groups-box" key={group.id}>
            <div className="row-menu">
                <NavLink to={`/groups/${group?.id}`}>
                <img src={group.backgroundImage} className="image" id="group-image"></img>
                </NavLink>
                <div className="all-my-groups-description">
                    <h2 className="group-name">{group?.name}</h2>
                    <p className="group-description">{group?.description}</p>
                </div>
            </div>
            <div className="menu-box">
                <div className="dropdown">
                    <button class="link" style={{float:"right"}}><FiMoreHorizontal className="ellipse"/></button>
                    <div className="dropdown-menu">
                        {/* <div className="my-group-buttons-box">  */}
                        <button onClick={e => setShowEditGroup(true)} className="my-button">Edit Group</button>
                        {showEditGroup && (
                        <Modal onClose={() => setShowEditGroup(false)}> 
                            <EditGroup closeModal={() => setShowEditGroup(false)}  group={group}/>
                        </Modal>
                        )}
                        <button onClick={ () => setShowDeleteGroup(true)} className="my-button delete">Delete</button>
                        {showDeleteGroup && (
                        <Modal onClose={() => setShowDeleteGroup(false)}>
                            <DeleteGroup closeModal={() => setShowDeleteGroup(false)} group={group}/>
                        </Modal>
                        )} 
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}