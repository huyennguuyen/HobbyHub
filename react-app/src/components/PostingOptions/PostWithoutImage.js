import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "../context/Modal";

import * as postActions from "../../store/post";
import EditPost from "../EditPostForm/EditPostForm";
import "./PostingOptions.css"

export default function PostWithOutImage ({post, group}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [showEditPost, setShowEditPost] = useState(false)

    const deleteIndividualPost = (post) => {
        dispatch(postActions.removePost(post.id))
    }


    return (
    <>
    <div className="post-image">
        <h3>{post?.title}</h3>
        {/* <img src={post?.image} className="image"></img> */}
        <p>{post?.description}</p>
        {sessionUser?.id === post?.ownerId && (
        <div className="buttons-box">
            <button onClick={e => setShowEditPost(true)}>Edit Post</button>
            {showEditPost && (
            <Modal onClose={() => setShowEditPost(false)}> 
                <EditPost closeModal={() => setShowEditPost(false)}  post={post} group={group}/>
            </Modal>
            )}
            <button onClick={() => deleteIndividualPost(post)}>Delete</button>
        </div>
        )}
    </div>
    </>
    )


}