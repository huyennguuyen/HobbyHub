import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGroup } from '../../store/group';
import "./DeleteGroup.css"

function DeleteGroup({ closeModal, group }) {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e, group) => {
        e.preventDefault();
        setErrors([]);
        dispatch(removeGroup(group.id))
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
        <div className="delete-box">
            <form className="delete-form" onSubmit={e => handleSubmit(e, group)}>
                <h3 className="delete-text">Are you sure you want to delete your group?</h3>
                <div >
                    <button id="delete" className="delete-button" type="submit">Confirm Delete</button>
                    <button id="delete" className="cancel-button" onClick={handleCancelClick}>Cancel</button>
                    <ul>
                        {errors && errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                </div>
            </form>
        </div>
    )
}

export default DeleteGroup;