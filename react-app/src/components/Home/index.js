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
    const [users, setUsers] = useState([]);
    // console.log("THIS IS GROUPS------------------", groups)
    // const [showEditGroup, setShowEditGroup] = useState(false)


    useEffect(() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) dispatch(groupActions.getGroupsHome())
    }, [sessionUser])


    useEffect(() => {
      async function fetchData() {
        const response = await fetch('/api/users/');
        const responseData = await response.json();
        setUsers(responseData.users);
      }
      fetchData();
    }, []);

    //    let createdBy = users.forEach(user => {
    //        user.id
    //    })

    // let createdBy = {users?.filter(user => user.id === group.ownerId)}
    

    // const deleteIndividualGroup = (group) => {
    //     dispatch(groupActions.removeGroup(group.id))
    // }

    return (
        <div className="groups-container">
            <div className="groups-center">
                <h1 className="groups-header"> All Groups </h1>
                {groups &&
                groups?.map(group =>
                    <div key={group.id} className="groups-box">
                        <NavLink to={`/groups/${group?.id}`}>
                        <img src={group?.backgroundImage} className="image pointer"></img>
                        </NavLink>
                        <div className="my-groups-description">
                            <NavLink to={`/groups/${group?.id}`} className="title-link pointer">
                                <h2 className="group-name">{group?.name}</h2>
                            </NavLink>
                            {/* REMEMBER TO MAKE IT SO ONLY THE PERSON THAT MADE THE GROUP AND PEOPLE THAT JOINT THE GROUP CAN GO TO THE INDIVIDUAL GROUP PAGE */}
                            <p className="group-description" key={group?.id}>{group?.description}</p>
                            {users && (users
                                ?.filter(user => user.id === group.ownerId)
                                ?.map(user => 
                                <p className="created"  key={user?.id}> Created by {user?.username}</p> 
                            ))}  
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Home;