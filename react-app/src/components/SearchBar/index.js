import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import * as groupActions from "../../store/group"


const SearchBar = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    // const groupState = useSelector(state => state.groups)
    // const groups = Object.values(groupState)
    // console.log("this is groups search--------", groups)

    useEffect(async() => {
        if (!sessionUser) history.push('/')
        if (sessionUser) await dispatch(groupActions.getAllGroups(sessionUser.id))
    }, [sessionUser])
 
return (
  <>
  <div>
    <input>
    
    
    
    </input>







  </div>
  
  
  
  
  
  </>




)



}

export default SearchBar