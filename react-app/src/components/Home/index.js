import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
// import EditGroup from "../EditGroupForm/EditGroupForm";
import "./home.css"


function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const groupState = useSelector(state => state.groups)
    const groups = Object.values(groupState)
    console.log("THIS IS GROUPS------------------", groups)
    // const [showEditGroup, setShowEditGroup] = useState(false)


    useEffect(() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) dispatch(groupActions.getGroupsHome())
    }, [sessionUser])

    // const deleteIndividualGroup = (group) => {
    //     dispatch(groupActions.removeGroup(group.id))
    // }

    return (
        <div className="groups-container">
            <div className="groups-center">
                <h1 className="groups-header"> All Groups </h1>
                {groups &&
                groups?.map(group =>
                    <div key={group?.id} className="groups-box">
                        <NavLink to={`/groups/${group?.id}`}>
                        <img src={group?.backgroundImage} className="image"></img>
                        </NavLink>
                        <div className="my-groups-description">
                            <h2 className="group-name" id="scroll">{group?.name}</h2>
                            {/* REMEMBER TO MAKE IT SO ONLY THE PERSON THAT MADE THE GROUP AND PEOPLE THAT JOINT THE GROUP CAN GO TO THE INDIVIDUAL GROUP PAGE */}
                            <p className="group-description" id="scrolling">{group?.description}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Home;