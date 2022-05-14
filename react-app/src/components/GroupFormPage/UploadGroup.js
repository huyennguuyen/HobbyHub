import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as groupActions from "../../store/group"



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
        setErrors(errors)
    }, [name, description])
    
    
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

        // const res = await fetch('/api/images', {
        //     method: "POST",
        //     body: formData,
        // });
        if (posted) {
            setImageLoading(false);
            // history.push("/")
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            history.push("/");
            console.log("error");
        }
    }
    
    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <ul className="new-note-errors">
            {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label className='textlabel'>
                Name:
            </label>
            <input onChange={e => setName(e.target.value)} type="text" className="new-note-text" placeholder="Add a name here..." value={name} />
            <label className='textlabel'>
                Description:
            </label>
            <input onChange={e => setDescription(e.target.value)} type="text" className="new-trip-destination" placeholder='Add a description...' value={description} />
            <input
              type="file"
              accept="image/*"
              onChange={updateImage}
            />
            <button type="submit">Submit</button>
            {(imageLoading)&& <p>Loading...</p>}
        </form>
        </>
    )
}

export default UploadGroup;