import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "../context/Modal";
import DeletePost from "../DeletePost";

import * as postActions from "../../store/post";
import EditPost from "../EditPostForm/EditPostForm";
import "./PostingOptions.css"

export default function PostWithOutImage ({post, group}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [showEditPost, setShowEditPost] = useState(false)
    const [showDeletePost, setShowDeletePost] = useState(false)

    // const deleteIndividualPost = (post) => {
    //     dispatch(postActions.removePost(post.id))
    // }


    return (
    <>
    <div className="post-image">
        <div className="inside-post-image">

            <h3>{post?.title}</h3>
            {/* <img src={post?.image} className="image"></img> */}
            <p className="post-description">{post?.description}</p>
            {sessionUser?.id === post?.ownerId && (
            <div className="buttons-box">
                <button onClick={e => setShowEditPost(true)}>Edit Post</button>
                {showEditPost && (
                <Modal onClose={() => setShowEditPost(false)}> 
                    <EditPost closeModal={() => setShowEditPost(false)}  post={post} group={group}/>
                </Modal>
                )}
                <button onClick={ () => setShowDeletePost(true)}>Delete</button>
                {showDeletePost && (
                <Modal onClose={() => setShowDeletePost(false)}>
                    <DeletePost closeModal={() => setShowDeletePost(false)} post={post}/>
                </Modal>
                )} 
            </div>
            )}
        </div>
    </div>
    </>
    )


}