
import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import * as invitedUsersActions from "../../store/invited_user"
import * as postActions from "../../store/post";
import EditPost from "../EditPostForm/EditPostForm";
import { Modal } from "../context/Modal";
import DeletePost from "../DeletePost";
import {FiMoreHorizontal} from "react-icons/fi"
import "./PostingOptions.css"

export default function PostWithImage ({post, group}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [showEditPost, setShowEditPost] = useState(false)
    const [showDeletePost, setShowDeletePost] = useState(false)
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/users/');
          const responseData = await response.json();
          setUsers(responseData.users);
        }
        fetchData();
      }, []);

    // const deleteIndividualPost = (post) => {
    //     dispatch(postActions.removePost(post.id))
    // }

return (
    <>
    <div className="post-image">
        <div className="inside-post-image">
            <div className="first-single">
                <div className="images-box">
                    <img src={post?.image} className="posting-image"></img>
                </div>
                <div className="menu">
                    {sessionUser?.id === post?.ownerId && (
                    <div className="menu-box-post">
                        <div className="dropdown">
                            <FiMoreHorizontal className="posts-button ellipse" style={{float:"right"}}/>
                            <div className="dropdown-menu">
                                <button onClick={e => setShowEditPost(true)} className="my-button">Edit Post</button>
                                {showEditPost && (
                                <Modal onClose={() => setShowEditPost(false)}> 
                                    <EditPost closeModal={() => setShowEditPost(false)}  post={post} group={group}/>
                                </Modal>
                                )}
                                <button onClick={() => setShowDeletePost(true)} className="my-button delete">Delete</button>
                                {showDeletePost && (
                                <Modal onClose={() => setShowDeletePost(false)}> 
                                    <DeletePost closeModal={() => setShowDeletePost(false)}  post={post}/>
                                </Modal>
                                    )}       
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
            <div className="centering">
                <h3 className="post-title">{post?.title}</h3>
                <p className="post-description">{post?.description}</p>
                {users && users
                    .filter(user => user.id === post.ownerId)
                    .map(user => 
                    <p className="posted-by"> Posted by {user?.username}</p> 
                )}  
            </div>
            {/* </div> */}
        </div>
    </div>
    </>
)


}