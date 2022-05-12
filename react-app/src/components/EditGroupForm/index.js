import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { Redirect } from "react-router-dom";
import * as groupActions from "../../store/group"
import "./EditFormPage.css"


export default function EditGroupForm ({group}) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [name, setName] = useState(group.name);
    const [description, setDescription] = useState(group.description)
    const [background_image, setBackgroundImage] = useState(group.backgroundImage)
    const [errors, setErrors] = useState([]);
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    useEffect(() => {
        let errors = [];
        if(!name.length) errors.push("Please enter a name.")
        if(!description.length) errors.push("Please enter a description")
        if(!background_image.length) errors.push("Please enter a image.")
        if(!background_image.match(url)) errors.push("Please enter a valid URL.")
        setErrors(errors)
    }, [name, description, background_image])

    const submitGroup = () => {
        setHasSubmitted(true)
        if (errors.length > 0) return;
        const groups = {
            ...group,
            name,
            description,
            background_image,
            owner_id: sessionUser.id,
        }

        console.log("THIS IS GROUPS----------", groups)
        
        dispatch(groupActions.editGroup(groups))
        // .then(() => closeModal())
        // .catch(async (res) => {
        //     const data = await res.json()
        //     if (data && data.errors) setErrors(data.errors)
        // })

        // history.push("/")
    };


    return (
        <div className="formContainer8">
            <form
                className="new-note-form"
                onSubmit={e => {
                    e.preventDefault();
                    submitGroup();
                }}>
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
                <label className='triplabel'>
                    Image URL:
                </label>
                <input onChange={e => setBackgroundImage(e.target.value)} type="text" className="new-trip-image" placeholder='Add an image URL...' value={background_image} />
                <button id="new-note-submit" type='submit' >Submit Group</button>
            </form>
        </div>
    );
}