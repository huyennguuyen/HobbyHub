
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import * as invitedUsersActions from "../../store/invited_user"
import * as postActions from "../../store/post";
import EditPost from "../EditPostForm/EditPostForm";
import { Modal } from "../context/Modal";
import DeletePost from "../DeletePost";
import "./PostingOptions.css"

export default function PostWithImage ({post, group}) {
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
            <img src={post?.image} className="image"></img>
            <div className="centering">
                <h3 className="post-title">{post?.title}</h3>
                <p className="post-description">{post?.description}</p>
            </div>
            {/* </div> */}
            {sessionUser?.id === post?.ownerId && (
            <div className="buttons-bov">
                <button onClick={e => setShowEditPost(true)}>Edit Post</button>
                {showEditPost && (
                <Modal onClose={() => setShowEditPost(false)}> 
                    <EditPost closeModal={() => setShowEditPost(false)}  post={post} group={group}/>
                </Modal>
                )}
                <button onClick={() => setShowDeletePost(true)}>Delete</button>
                {showDeletePost && (
                <Modal onClose={() => setShowDeletePost(false)}> 
                    <DeletePost closeModal={() => setShowDeletePost(false)}  post={post}/>
                </Modal>
                    )}       
            </div>
            )}
        </div>
    </div>
    </>
)


}