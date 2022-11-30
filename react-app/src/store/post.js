//import { csrfFetch } from './csrf';

const GET_POST = "post/getPost"
const POST_POST= "post/postPost"
const DELETE_POST = "post/deletePost"

// CONSTANTS display text in actions log
/////////////////////////////////////////
// action creators
// actions are just objects

const addPost = (post) => {
    return {
        type: POST_POST,
        payload: post
    }
}

const loadPosts = (posts) => {
    return {
        type: GET_POST,
        payload: posts
    };
};

const deletePost = (id) => {
    return {
        type: DELETE_POST,
        payload: id
    };
}

// end of actions
/////////////////////////////////////////
// thunks return a function that returns an action

// export const postNewGroup = (newGroup) => async (dispatch) => {
//     // const { ownerId, name, description, backgroundImage} = newGroup
//     // console.log("THIS IS NAME-------------", name)
//     const response = await fetch('/api/groups/new', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(newGroup)
//     });

//     if (response.ok) {
//         const data = await response.json();
//         console.log("THIS IS DATA IN THE STORE---------", data)
//         dispatch(addGroup(data))
//     } else if (response.status < 500) {
//         const data = await response.json();
//         if (data.errors) return data.errors;
//     } else return ['An error occurred. Please try again.']
// }

export const postNewPost = (formData) => async (dispatch) => {
    
    // const groupId = formData.get("id")

    // console.log("THIS IS STORE FORM DATA------", formData)
    const res = await fetch ('/api/posts/', {
        method: "POST",
        body: formData,
    })

    if (res.ok) {
        const data = await res.json()

        dispatch(addPost(data))
    }


}

// get all posts for the specific group

export const getAllPosts = (groupId) => async (dispatch) => {
    // console.log("THIS IS USER ID-----------", userId)
    const res = await fetch(`/api/posts/groups/${groupId}`)
    if (res.ok) {
        const posts = await res.json();
        dispatch(loadPosts(posts))
    }
}

// export const getGroupsHome = () => async (dispatch) => {
//     const res = await fetch ("/api/groups/home")

//     if (res.ok) {
//         const groups = await res.json();
//         dispatch(loadGroups(groups))

//     }
// }


export const editPost = (formData) => async (dispatch) => {
    let formDataId = formData.get("id")
    // console.log("THIS IS EDIT GROUP-------", formData)
    const id = parseInt(formDataId, 10)
    const res = await fetch(`/api/posts/${formDataId}`, {
    method: 'PUT',
    body: formData,
    });

    if(res.ok) {
        const post = await res.json()
        dispatch(addPost(post))
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors){

            return data.errors;
        } 
            
    } else return ['An error occurred. Please try again.']
}

export const removePost = (postId) => async (dispatch) => {
    const id = parseInt(postId, 10)
    const res = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    })

    if(res.ok) {
        dispatch(deletePost(id))
    }
}

// export const loadSingleGroup = (id) => async (dispatch) => {
//     const res = await fetch(`/api/groups/${id}`);

//     if (res.ok) {
//         const group = await res.json();
//         dispatch(addGroup(group))
//     }
//     else return ['An error occurred. Please try again.']
// }


// end of thunks
/////////////////////////////////////////
// reducer


const initialState = {};
const postsReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case POST_POST:
            newState[action.payload.id] = action.payload
            return newState
        case GET_POST:
            newState = action.payload
            return newState
            // assumes incoming trips are flattened
        case DELETE_POST:
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}


export default postsReducer;