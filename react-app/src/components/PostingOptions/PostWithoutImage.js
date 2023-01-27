import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from "../context/Modal";
import DeletePost from "../DeletePost";

import * as postActions from "../../store/post";
import EditPost from "../EditPostForm/EditPostForm";
import { FiMoreHorizontal } from "react-icons/fi";
import Popup from "reactjs-popup"
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
            <div className="menu">
                {sessionUser?.id === post?.ownerId && (
                <div className="menu-box-post">
                    <div className="dropdown">
                        <div className="menu-end"> 
                            <Popup
                                trigger = {<button className="posts-button pointer" ><FiMoreHorizontal style={{float:"right", height: "24px", width: "24px"}}/></button>}
                                position="bottom right"
                                className="menu-container"
                                // open={open}
                                // onClose={close}
                                nested
                            >
                            <>
                            <Popup 
                                trigger={<button className="my-button pointer on-top">Edit Post</button>}
                                className="popup-edit"
                                modal
                            >
                                {close => (
                                    <>
                                    <EditPost close={close} post={post} group={group}/>
                                    </>
                                )}

                            </Popup>
                            <Popup 
                                trigger={<button className="my-button delete pointer on-bottom">Delete Post</button>}
                                className="popup-delete"
                                modal
                            >
                                {close => (
                                    <>
                                    <DeletePost close={close} post={post}/>
                                    </>
                                )}

                            </Popup>
                            </>
                        </Popup>  
                        </div>
                    </div>
                </div>
                )}
            </div>
            <div className="centering">
                <div className="title-menu">
                    <h3 className="posting-header">{post?.title}</h3>
                </div>
                <p className="post-description">{post?.description}</p>
                {users && users
                    .filter(user => user.id === post.ownerId)
                    .map(user => 
                    <p className="posted-by-image" key={user.id}> Posted by {user?.username}</p> 
                )} 
            </div>
        </div>
    </div>
    </>
    )


}