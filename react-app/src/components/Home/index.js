import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import EditGroup from "../EditGroupForm/EditGroupForm";
import "./home.css"


function Home() {
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
        <div className="page-container">
            <h1 id="all-trips"> All Groups </h1>
            <div className="trip-gallery">
                {groups &&
                groups?.map(group =>
                    <li key={group.id}>
                        <p>{group.name}</p>
                        <p>{group.description}</p>
                        <NavLink to={`/groups/${group.id}`}>
                        <img src={group.backgroundImage} className="image"></img>
                        </NavLink>
                        <button onClick={e => setShowEditGroup(!showEditGroup)}>Edit Group</button>
                        {showEditGroup && 
                        <EditGroup group={group}/>
                        }
                        <button onClick={() => deleteIndividualGroup(group)}>Delete</button>
                    </li>
                )}
            </div>
        </div>
    );
}
export default Home;