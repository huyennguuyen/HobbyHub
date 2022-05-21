import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "../context/Modal";
import DeletePost from "../DeletePost";

import * as postActions from "../../store/post";
import EditPost from "../EditPostForm/EditPostForm";
import { FiMoreHorizontal } from "react-icons/fi";
import "./PostingOptions.css"

export default function PostWithOutImage ({post, group}) {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);
    const [showEditPost, setShowEditPost] = useState(false)
    const [showDeletePost, setShowDeletePost] = useState(false)
    const [users, setUsers] = useState([]);

    // const deleteIndividualPost = (post) => {
    //     dispatch(postActions.removePost(post.id))
    // }

    useEffect(() => {
        async function fetchData() {
          const response = await fetch('/api/users/');
          const responseData = await response.json();
          setUsers(responseData.users);
        }
        fetchData();
      }, []);


    return (
    <>
    <div className="post-image">
        <div className="inside-post-image">
            <div className="centering">
                <div className="title-menu">
                    <h3 className="posting-header">{post?.title}</h3>
                    <div className="menu">
                        {sessionUser?.id === post?.ownerId && (
                        <div className="menu-box-post">
                            <div className="dropdown">
                                <FiMoreHorizontal className="posts-button pointer" style={{float:"right"}} id="ellipse" />
                                <div className="dropdown-menu">
                                    <button onClick={e => setShowEditPost(true)} className="my-button pointer">Edit Post</button>
                                    {showEditPost && (
                                    <Modal onClose={() => setShowEditPost(false)}> 
                                        <EditPost closeModal={() => setShowEditPost(false)}  post={post} group={group}/>
                                    </Modal>
                                    )}
                                    <button onClick={ () => setShowDeletePost(true)} className="my-button delete pointer">Delete</button>
                                    {showDeletePost && (
                                    <Modal onClose={() => setShowDeletePost(false)}>
                                        <DeletePost closeModal={() => setShowDeletePost(false)} post={post}/>
                                    </Modal>
                                    )} 
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                <p className="post-description">{post?.description}</p>
                {users && users
                    .filter(user => user.id === post.ownerId)
                    .map(user => 
                    <p className="posted-by"> Posted by {user?.username}</p> 
                )} 
            </div>
        </div>
    </div>
    </>
    )


}