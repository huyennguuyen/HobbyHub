import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removePost } from '../../store/post';
// import "./NoteCards.css";

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
        <div className="formContainer7">
            <form id="delete_note_form" onSubmit={e => handleSubmit(e, post)}>
                <h3>Are you sure?</h3>
                <div id="delete_note_buttons">
                    <button id="delete" className="deleteButton" type="submit">Confirm Delete</button>
                    <button id="delete" className="cancelDelete" onClick={handleCancelClick}>Cancel</button>
                    <ul className="new-trip-errors">
                        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default DeletePost;