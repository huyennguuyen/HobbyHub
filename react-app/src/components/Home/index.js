import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"
import "./home.css"


function Home() {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const groupState = useSelector(state => state.groups)
    const groups = Object.values(groupState)


    useEffect(() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) dispatch(groupActions.getAllGroups(sessionUser.id))
    }, [sessionUser])

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
                    </li>
                )}
            </div>
        </div>
    );
}
export default Home;