import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import * as invitedUsersActions from "../../store/invited_user"
import * as groupActions from "../../store/group";

function SingleGroup() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { groupId } = useParams()
    
    const group = useSelector(state => state.groups[groupId]);
    const sessionUser = useSelector(state => state.session.user);

    useEffect(() => {
        if (!sessionUser) history.push('/')
    },[sessionUser])
    
    useEffect(() => {
        if(groupId) {
            dispatch(groupActions.loadSingleGroup(groupId))
        }
    }, [groupId])

    return (
        <>
        <h1>{group?.name}</h1>
        <p>{group?.description}</p>
        <img src={group?.backgroundImage} className="image"></img>
        </>
    )



    
}

export default SingleGroup