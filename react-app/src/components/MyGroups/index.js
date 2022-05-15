import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import EditGroup from "../EditGroupForm/EditGroupForm";
import { Modal } from "../context/Modal";
import "./MyGroups.css"


function MyGroups() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const groupState = useSelector(state => state.groups)
    const groups = Object.values(groupState)
    console.log("THIS IS GROUPS------------------", groups)
    const [showEditGroup, setShowEditGroup] = useState(false)


    useEffect(() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) dispatch(groupActions.getAllGroups(sessionUser.id))
    }, [sessionUser])

    const deleteIndividualGroup = (group) => {
        dispatch(groupActions.removeGroup(group.id))
    }

    return (
        <div className="my-groups-container">
            <div className="my-groups-center">
                <h1 className="my-groups-header"> My Groups </h1>
                {groups && groups?.map(group =>
                    <div key={group?.id} className="my-groups-box">
                        <p>{group?.name}</p>
                        <p>{group?.description}</p>
                        <NavLink to={`/groups/${group?.id}`}>
                        <img src={group.backgroundImage} className="image"></img>
                        </NavLink>
                        <div className="buttons-box"> 
                            <button onClick={e => setShowEditGroup(true)}>Edit Group</button>
                            {showEditGroup && (
                                <Modal onClose={() => setShowEditGroup(false)}> 
                                    <EditGroup closeModal={() => setShowEditGroup(false)} group={group}/>
                                </Modal>
                            )}
                            <button onClick={() => deleteIndividualGroup(group)}>Delete</button>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    );
}
export default MyGroups;