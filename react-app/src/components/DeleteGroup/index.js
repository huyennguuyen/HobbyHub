import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeGroup } from '../../store/group';
import "./DeleteGroup.css"

function DeleteGroup({ close, group }) {
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
        close();
    }

    const handleCancelClick = (e) => {
        e.preventDefault()
        close();
    };

    return (
        <>
        <img src="https://res.cloudinary.com/daeopbcax/image/upload/v1667352522/Huyen/cancel_ywptyy.png" className="cancel-button pointer" onClick={handleCancelClick}></img>
        <div className="delete-box">
            <form className="delete-form" onSubmit={e => handleSubmit(e, group)}>
                <h3 className="delete-text">Are you sure you want to delete your group?</h3>
                <div >
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

export default DeleteGroup;