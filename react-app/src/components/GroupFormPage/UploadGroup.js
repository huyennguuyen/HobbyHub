import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from "../../store/group"
import "./UploadGroup.css"



const UploadGroup = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("")
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)


    useEffect(() => {
        let errors = [];
        if(!name.length) errors.push("Please enter a name.")
        if(!description.length) errors.push("Please enter a description.")
        if(!image) errors.push("Please upload an image.")
        if(name.length > 255) errors.push("Please enter a name less than 255 characters.")
        setErrors(errors)
    }, [name, description, image])
    
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        setHasSubmitted(true)

        if (errors.length > 0) return;

        const formData = new FormData();
        formData.append("background_image", image);
        formData.append("owner_id", sessionUser.id)
        formData.append("name", name)
        formData.append("description", description)
        
        // console.log("THIS IS FORM DATA---------------", formData.values())

        // let formValues = formData.values()
        // console.log(formValues)
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);
        const posted = await dispatch(groupActions.postNewGroup(formData))

        setName("")
        setDescription("")
        setImage(null)

        // const res = await fetch('/api/images', {
        //     method: "POST",
        //     body: formData,
        // });
        // if (posted) {
            setImageLoading(false);
            history.push("/my_groups")
            console.log("hi")
        // }
        // else {
        //     setImageLoading(false);
        //     // a real app would probably use more advanced
        //     // error handling
        //     history.push("/my_groups");
        //     console.log("error");
        // }
    }
    
    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    
    return (
        <>
        <div className="group-post">
            <h2 className="upload-header">Get started by adding a name to your group and a short description about your hobby!</h2>
            <div className="upload-group-container">
                <form onSubmit={handleSubmit} className="upload-form">
                    <div className="inside-upload">
                        <div className="group-errors">
                            {hasSubmitted && errors.map((error, ind) => (
                            <div key={ind} className="errors">{error}</div>
                            ))}
                        </div>
                        <div className="center-group">
                            <label className='text-label'>
                                Name
                            </label>
                            <input onChange={e => setName(e.target.value)} type="text" className="upload-input first" placeholder="Add a name here..." value={name} />
                            <label className='text-label'>
                                Description
                            </label>
                            <input onChange={e => setDescription(e.target.value)} type="text" className="upload-input second" placeholder='Add a description...' value={description} />
                            <label className="text-label pic"> Upload an Image </label>
                            <input
                            type="file"
                            accept="image/*"
                            onChange={updateImage}
                            className="file-input"
                            />
                            <button type="submit" className="upload-button">Submit</button>
                            <div className="loading-text">
                                {(imageLoading)&& <p className="loading">Loading...</p>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default UploadGroup;