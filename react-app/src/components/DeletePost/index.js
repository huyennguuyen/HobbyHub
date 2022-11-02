import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from '../../store/post';
import "./DeletePost.css"

function DeletePost({ closeModal, post }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e, post) => {
        e.preventDefault();
        setErrors([]);
        dispatch(removePost(post.id))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);
        });
        closeModal();
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        closeModal();
    };

    return (
        <>
        <img src="https://res.cloudinary.com/daeopbcax/image/upload/v1667352522/Huyen/cancel_ywptyy.png" className="cancel-button-delete pointer" onClick={handleCancelClick}></img>
        <div className="delete-box">
            <form className="delete-form" onSubmit={e => handleSubmit(e, post)}>
                <h3 className="delete-text">Are you sure you want to delete your post?</h3>
                <div>
                    <button id="delete" className="delete-button pointer" type="submit">Confirm Delete</button>
                    <button id="delete" className="cancels-button pointer" onClick={handleCancelClick}>Cancel</button>
                    <ul>
                        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
            </form>
        </div>
        </>
    )
}

export default DeletePost;