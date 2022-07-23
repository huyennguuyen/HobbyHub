import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import * as invitedUsersActions from "../../store/invited_user"
import * as groupActions from "../../store/group";
import * as postActions from "../../store/post";
import UploadPost from "../PostForm/UploadPost";
import EditPost from "../EditPostForm/EditPostForm";
import PostWithImage from "../PostingOptions/PostWithImage";
import PostWithOutImage from "../PostingOptions/PostWithoutImage";
import { Modal } from "../context/Modal";

import "./SingleGroupPage.css"

function SingleGroup() {
    const dispatch = useDispatch()
    const history = useHistory()
    const { groupId } = useParams()
    
    const group = useSelector(state => state.groups[groupId]);
    const sessionUser = useSelector(state => state.session.user);
    const [showModal, setShowModal] = useState(false)
    const [showForm, setShowForm] = useState(false)

    const postsObj = useSelector(state => state.posts);
    const posts = Object.values(postsObj)

    // console.log("THIS IS POSTS------", posts)

  

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

    useEffect(() => {
        if(!showForm) return;

        const closeForm = () => {
            setShowForm(false)
        }

        document.addEventListener("click", closeForm)

        return () => document.removeEventListener("click", closeForm)

    }, [showForm])


    return (
        <>
        <div className="single-group-container">
            <div className="single-group-page">
                <div className="outside-details">
                    <div className="details-group"> 
                        <img src={group?.backgroundImage} className="posting-image"></img>
                        <div className="single-text">
                            <h2 className="group-name" id="single-header">{group?.name}</h2>
                            <p className="group-description" id="single">{group?.description}</p>
                        </div>
                    </div>
                </div>
                <div className="center-post">
                    <button onClick={() => setShowModal(true)} className="post-button pointer">Create a Post</button>
                    <div className="post-dropdown">
                        {showModal && (
                        <Modal onClose={() => setShowModal(false)}>
                         <UploadPost group={group} setShowModal={setShowModal}/>
                         </Modal>
                        )}
                    </div>
                    {posts && posts.reverse().map(post => (
                        post.image ?
                        <> 
                        <PostWithImage key={post?.id} post={post} group={group}/>
                        </>:
                        <> 
                        <PostWithOutImage key={post?.id} post={post} group={group}/>
                        </>
                    ))}
                    <div></div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default SingleGroup