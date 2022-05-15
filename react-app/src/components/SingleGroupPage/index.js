import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import * as invitedUsersActions from "../../store/invited_user"
import * as groupActions from "../../store/group";
import * as postActions from "../../store/post";
import UploadPost from "../PostForm/UploadPost";
import EditPost from "../EditPostForm/EditPostForm";

function SingleGroup() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { groupId } = useParams()
    
    const group = useSelector(state => state.groups[groupId]);
    const sessionUser = useSelector(state => state.session.user);

    const postsObj = useSelector(state => state.posts);
    const posts = Object.values(postsObj)

    console.log("THIS IS POSTS------", posts)

  

    useEffect(() => {
        if (!sessionUser) history.push('/')
    },[sessionUser])
    
    useEffect(() => {
        if(groupId) {
            dispatch(groupActions.loadSingleGroup(groupId))
        }
    }, [groupId])

    useEffect(() => {
        if(groupId) {
            dispatch(postActions.getAllPosts(groupId))
        }
    }, [groupId])

    const deleteIndividualPost = (post) => {
        dispatch(postActions.removePost(post.id))
    }


    return (
        <>
        <h1>{group?.name}</h1>
        <p>{group?.description}</p>
        <img src={group?.backgroundImage} className="image"></img>
        <UploadPost group={group}/>
        {posts && posts.map(post => (
            post.image ?
            <> 
            <li key={post?.id}>
                <h3>{post?.title}</h3>
                <img src={post?.image} className="image"></img>
                <p>{post?.description}</p>
                {sessionUser?.id === post?.ownerId && (
                <>
                    <EditPost post={post} group={group}/> 
                    <button onClick={() => deleteIndividualPost(post)}>Delete</button>
                </>
                )}
            </li>
            </>:
            <> 
             <li key={post?.id}>
                <h3>{post?.title}</h3>
                {/* <img src={post?.image} className="image"></img> */}
                <p>{post?.description}</p>
                {sessionUser?.id === post?.ownerId && (
                <>
                    <EditPost post={post} group={group}/> 
                    <button onClick={() => deleteIndividualPost(post)}>Delete</button>
                </>
                )}
            </li>
            </>
        ))}
        </>
    )
    
}

export default SingleGroup