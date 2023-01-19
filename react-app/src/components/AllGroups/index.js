import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import EditGroup from "../EditGroupForm/EditGroupForm";
import DeleteGroup from "../DeleteGroup";
import { Modal } from "../context/Modal";
import {FiMoreHorizontal} from "react-icons/fi"
import Popup from "reactjs-popup"
// import AllGroups from "../AllGroups";

import "./AllGroups.css"

export default function AllGroups ({group}){

    const [showEditGroup, setShowEditGroup] = useState(false)
    const [showDeleteGroup, setShowDeleteGroup] = useState(false)
    const [users, setUsers] = useState([]);

    // const deleteIndividualGroup = async (group) => {
    //     await dispatch(groupActions.removeGroup(group.id))
    // }

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/users/');
          const responseData = await response.json();
          setUsers(responseData.users);
        }
        fetchData();
      }, []);

    return (
        <>
        <div className="my-groups-box" key={group.id}>
            <div className="row-menu">
                <NavLink to={`/groups/${group?.id}`}>
                <img src={group.backgroundImage} className="image pointer" id="group-image"></img>
                </NavLink>
                <div className="all-my-groups-description">
                    <NavLink to={`/groups/${group?.id}`} className="title-link pointer">
                        <h2 className="group-name">{group?.name}</h2>
                    </NavLink>
                    <p className="group-description">{group?.description}</p>
                    {users && users
                        ?.filter(user => user.id === group.ownerId)
                        .map(user => 
                        <p className="created" key={user.id}> Created by {user?.username}</p> 
                    )}  
                </div>
            </div>
                <div className="dropdown">
                    {/* <FiMoreHorizontal className="link pointer" style={{float:"right"}} id="ellipse"/>
                    <div className="dropdown-menu">
                        <button onClick={e => setShowEditGroup(true)} className="my-button pointer">Edit Group</button>
                        {showEditGroup && (
                        <Modal onClose={() => setShowEditGroup(false)}> 
                            <EditGroup closeModal={() => setShowEditGroup(false)}  group={group}/>
                        </Modal>
                        )}
                        <button onClick={ () => setShowDeleteGroup(true)} className="my-button delete pointer">Delete Group</button>
                        {showDeleteGroup && (
                        <Modal onClose={() => setShowDeleteGroup(false)}>
                            <DeleteGroup closeModal={() => setShowDeleteGroup(false)} group={group}/>
                        </Modal>
                        )}   
                    </div> */}
                    <Popup
                            trigger = {<button className="edit-single-icon"><FiMoreHorizontal className="link pointer" style={{float:"right"}} id="ellipse"/></button>}
                            position="bottom right"
                            className="popup=box"
                            // open={open}
                            // onClose={close}
                            nested
                        >
                        <>
                        <Popup 
                            trigger={<button className="my-button pointer">Edit Group</button>}
                            className="popup-edit"
                            modal
                        >
                            {close => (
                                <>
                                <EditGroup close={close} group={group}/>
                                </>
                            )}

                        </Popup>
                        <Popup 
                            trigger={<button className="my-button delete pointer">Delete Group</button>}
                            className="popup-delete"
                            modal
                        >
                            {close => (
                                <>
                                <DeleteGroup close={close} group={group}/>
                                </>
                            )}

                        </Popup>
                        </>
                     </Popup>  
                </div>
        </div>
        </>
    )
}