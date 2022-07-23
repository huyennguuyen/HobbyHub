import React, { useEffect, useState } from "react";
import { AiOutlineEnter } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, NavLink } from "react-router-dom";
import "./SearchBar.css"


const SearchBar = ({groups}) => {
    const dispatch = useDispatch()
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [text, setText] = useState("")
    const [matches, setMatches] = useState([])
    // const groupState = useSelector(state => state.groups)
    // const groups = Object.values(groupState)
    // console.log("this is groups search--------", groups)

    // useEffect(async() => {
    //     if (!sessionUser) history.push('/')
    //     if (sessionUser) await dispatch(groupActions.getAllGroups(sessionUser.id))
    // }, [sessionUser])

    const change = (text) => {
       let matches = []
       if (text.length) {
        matches = groups.filter(group => {
            const regex = new RegExp(`${text}`, "gi")
            return group.name.match(regex)
        })
       }

       console.log(matches)
        setMatches(matches)
        setText(text)
    }

    // const entering = () => {


    // }
 
return (
  <>
  <div> 
    <input type="text"
        onChange={e => change(e.target.value)}
        // onKeyDown={e => entering}
        value={text}
        className="search"

    />
    {/* <div>{text}</div> */}
    {matches && (
      <div className="matches">
        {matches.map((match, i) =>
            <div key={i}> 
                <NavLink to={`/groups/${match.id}`} key={i} className="link-match">
                {match.name}
                </NavLink>
            </div>

        )}
      </div>
    )}
        {/* {matches && (
            matches.map((match, i) =>
            <div key={i} className="matches"> 
                <NavLink to={`/groups/${match.id}`} key={i} className="link-match">
                {match.name}
                </NavLink>
            </div>
                
            ) 
        )} */}

  </div>
  
  </>




)



}

export default SearchBar