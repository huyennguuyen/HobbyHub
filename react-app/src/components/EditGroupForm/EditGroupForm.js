import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from "../../store/group"
import { Modal } from "../context/Modal";
import {MdOutlineCancelPresentation} from "react-icons/md"
import "./EditGroupForm.css"



const EditGroup = ({closeModal, group}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState(group.name);
    const [description, setDescription] = useState(group.description)
    // const [background_image, setBackgroundImage] = useState(group.backgroundImage)
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [imageLoading, setImageLoading] = useState(false);
    const [image, setImage] = useState(null);
    // const [image, setImage] = useState(group.backgroundImage)

    // console.log("THIS IS BACKGROUND IMAGE-----------", group.backgroundImage)


    useEffect(() => {
        let errors = [];
        let imageFile = ["pdf", "png", "jpg", "jpeg", "gif"]
        if(!name.length) errors.push("Please enter a name.")
        if(!description.length) errors.push("Please enter a description.")
        if(name.length > 255) errors.push("Please enter a name less than 255 characters.")
        if (image) {
            if(!imageFile.includes(image?.name.split(".").pop())) errors.push ("Please upload a pdf, png, jpg, jpeg, or gif file type.")
        }
        // if(!image) errors.push("Please upload an image")
        setErrors(errors)
    }, [name, description, image])

    
    
    const handleSubmit = async(e) => {

        e.preventDefault();

        setHasSubmitted(true)

        if (errors.length > 0) return;

        const formData = new FormData();
        formData.append("background_image", image);
        formData.append("owner_id", sessionUser.id)
        formData.append("name", name)
        formData.append("description", description)
        formData.append("id", group.id)
        
        // console.log("THIS IS FORM DATA---------------", formData)

        for(let key of formData.values()){
            console.log("THIS IS VALUES------", key)
        }
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        // let post = await dispatch(groupActions.editGroup(formData))

        // console.log(post)
        // .catch(async(res) => {
        //     const data = await res.json();
        //     console.log("THIS IS ERRORS--------", data)
        // //     if (data && data.errors) setErrors(data.errors);
        //   });

        

        // const res = await fetch('/api/images', {
        //     method: "POST",
        //     body: formData,
        // });

        let post = await dispatch(groupActions.editGroup(formData))

        closeModal()

        // console.log("THIS IS POST-------", post)
        
        if (post) {
            setImageLoading(false);
             history.push("/my_groups");
            // setErrors(["nope"])
        }
        // else {
        //     setImageLoading(false);
        //     // a real app would probably use more advanced
        //     // error handling
        //     history.push("/my_groups")
        //     // errors.push("Please put a file")
        //     // console.log("error");
        // }
    }
    
    const updateImage = (e) => {
        const file = e.target.files[0];
        console.log("THIS IS FILES---------", file)

        setImage(file);
    }

    const onCancel = (e) => {
        e.preventDefault()
        closeModal()
    
      }


    
    return (
        <>
        <MdOutlineCancelPresentation className="cancel-button pointer" onClick={onCancel}/>
        <div className="edit-group-box">
            <form onSubmit={handleSubmit} className="edit-group-form">
                <ul className="new-note-errors">
                {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
                </ul>
                <div className="center-login">
                    <label className='login text'>
                        Name
                    </label>
                    <input onChange={e => setName(e.target.value)} type="text" id="edit-group-input" className="login-input first-image" placeholder="Add a name here..." value={name} />
                    <label className='login text'>
                        Description
                    </label>
                    <input onChange={e => setDescription(e.target.value)} type="text" id="edit-group-input" className="login-input second" placeholder='Add a description...' value={description} />
                    <label className="edit-group-label">Upload an Image</label>
                    <input
                    type="file"
                    accept="image/*"
                    onChange={updateImage}
                    className="edit-group-image"
                    />
                    <button type="submit" className="login-button pointer">Submit</button>
                    <div className="loading-text">
                        {imageLoading && <p className="loading">Loading...</p> }
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default EditGroup;