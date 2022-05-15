import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as postActions from "../../store/post"



const EditPost = ({post, group}) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const [title, setTitle] = useState(post?.title);
    const [description, setDescription] = useState(post?.description)
    // const [background_image, setBackgroundImage] = useState(group.backgroundImage)
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [imageLoading, setImageLoading] = useState(false);
    const [image, setImage] = useState(null);
    // const [image, setImage] = useState(group.backgroundImage)

    console.log("THIS IS BACKGROUND FILES-----------", post.files)


    useEffect(() => {
        let errors = [];
        if(!title.length) errors.push("Please enter a name.")
        if(!description.length) errors.push("Please enter a description")
        if(!image) errors.push("Please upload an image")
        setErrors(errors)
    }, [title, description, image])
    
    
    const handleSubmit = async (e) => {

        e.preventDefault();

        setHasSubmitted(true)

        if (errors.length > 0) return;

        const formData = new FormData();
        formData.append("image", image);
        formData.append("owner_id", sessionUser.id)
        formData.append("title", title)
        formData.append("description", description)
        formData.append("id", post.id)

        // console.log(post)
        
        console.log("THIS IS FORM DATA---------------", formData)

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

        let res = await dispatch(postActions.editPost(formData))

        // console.log("THIS IS POST-------", post)
        
        if (res) {
            setImageLoading(false);
             history.push("/");
            // setErrors(["nope"])
        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            history.push(`/groups/${group.id}`)
            // errors.push("Please put a file")
            // console.log("error");
        }
    }
    
    const updateImage = (e) => {
        const file = e.target.files[0];
        console.log("THIS IS FILES---------", file)

        setImage(file);
    }
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <ul className="new-note-errors">
            {hasSubmitted && errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label className='textlabel'>
                Title:
            </label>
            <input onChange={e => setTitle(e.target.value)} type="text" className="new-note-text" placeholder="Add a name here..." value={title} />
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

export default EditPost;