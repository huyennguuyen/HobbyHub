import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as postActions from "../../store/post"
import "./UploadPost.css"



const UploadPost = ({group, setShowModal}) => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [imageLoading, setImageLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)


    useEffect(() => {
        let errors = [];
        if(!title.length) errors.push("Please enter a name.")
        if(!description.length) errors.push("Please enter a description.")
        if(title.length > 255) errors.push("Please enter a name less than 255 characters.")
        setErrors(errors)
    }, [title, description])

    // useEffect(() => {
    //     return () => {
    //         setTitle("")
    //         setDescription("")
    //         setImage(null)
    //     }
    // }, [image, title, description])
    
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        setHasSubmitted(true)

        if (errors.length > 0) return;

        const formData = new FormData();
        formData.append("image", image);
        formData.append("owner_id", sessionUser.id)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("group_id", group.id)
        // formData.append("id", group.id)
        
        // console.log("THIS IS FORM DATA---------------", formData.values())

        // for(let key of formData.values()){
        //     console.log("THIS IS VALUES------", key)
        // }

        // let formValues = formData.values()
        // console.log(formValues)
        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);
        const posted = await dispatch(postActions.postNewPost(formData))

        // setTitle("")
        // setDescription("")
        // setImage(false)

        setShowModal(false)

        // const res = await fetch('/api/images', {
        //     method: "POST",
        //     body: formData,
        // });
        // if (posted) {
        //     setImageLoading(false);
        //     // history.push("/")
        // }
        // else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            history.push(`/groups/${group.id}`);
            console.log("error");
        // }
    }
    
    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }
    
    return (
        <>
        <div className="upload-post">
            <form onSubmit={handleSubmit} className="post-form">
                <div className="inside-post">

                    <ul className="post-errors">
                        {hasSubmitted && errors.map((error, idx) => <li key={idx} className="errors">{error}</li>)}
                    </ul>
                    <div className="post-first">
                        <label className='text-label'>
                            Title
                        </label>
                        <input onChange={e => setTitle(e.target.value)} type="text" className="post-input one" placeholder="Add a name here..." value={title} />
                        <label className='text-label'>
                            Description
                        </label>
                        <textarea onChange={e => setDescription(e.target.value)} type="text" className="post-input two" placeholder='Add a description...' value={description} />
                        <label className="text-label">Upload an Image</label>
                    </div>
                    <div className="post-second">
                        <input
                        type="file"
                        accept="image/*"
                        //   multiple
                        onChange={updateImage}
                        className="post-image-input"
                        />
                        <button type="submit" className="upload-button post">Submit</button>
                    </div>
                    <div className="loading-text">
                        {(imageLoading)&& <p className="loading">Loading...</p>}
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}

export default UploadPost;