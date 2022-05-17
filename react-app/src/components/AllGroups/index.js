import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import EditGroup from "../EditGroupForm/EditGroupForm";
import DeleteGroup from "../DeleteGroup";
import { Modal } from "../context/Modal";
// import AllGroups from "../AllGroups";
// import "./MyGroups.css"

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
        <p>{group?.name}</p>
        <p>{group?.description}</p>
        <NavLink to={`/groups/${group?.id}`}>
        <img src={group.backgroundImage} className="image"></img>
        </NavLink>
        <div className="buttons-box"> 
            <button onClick={e => setShowEditGroup(true)}>Edit Group</button>
            {showEditGroup && (
            <Modal onClose={() => setShowEditGroup(false)}> 
                <EditGroup closeModal={() => setShowEditGroup(false)}  group={group}/>
            </Modal>
            )}
            <button onClick={ () => setShowDeleteGroup(true)}>Delete</button>
            {showDeleteGroup && (
            <Modal onClose={() => setShowDeleteGroup(false)}>
                <DeleteGroup closeModal={() => setShowDeleteGroup(false)} group={group}/>
            </Modal>
            )} 
        </div>
        </div>
        </>
    )
}