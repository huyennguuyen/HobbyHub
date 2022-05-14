//import { csrfFetch } from './csrf';

const GET_POST = "group/getGroup"
const POST_POST= "group/postGroup"
const DELETE_POST = "group/deleteGroup"

// CONSTANTS display text in actions log
/////////////////////////////////////////
// action creators
// actions are just objects

const addPost = (group) => {
    return {
        type: POST_POST,
        payload: group
    }
}

const loadGroups = (groups) => {
    return {
        type: GET_GROUP,
        payload: groups
    };
};

const deleteGroup = (id) => {
    return {
        type: DELETE_GROUP,
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

export const postNewGroup = (formData) => async (dispatch) => {

    // console.log("THIS IS STORE FORM DATA------", formData)
    const res = await fetch ("/api/groups/new", {
        method: "POST",
        body: formData,
    })

    if (res.ok) {
        const data = await res.json()
        console.log("THIS IS DATA FROM STORE-----",data)
        dispatch(addGroup(data))
    }


}

export const getAllGroups = (userId) => async (dispatch) => {
    console.log("THIS IS USER ID-----------", userId)
    const res = await fetch(`/api/groups/users/${userId}`)
    if (res.ok) {
        const groups = await res.json();
        dispatch(loadGroups(groups))
    }
}

export const getGroupsHome = () => async (dispatch) => {
    const res = await fetch ("/api/groups/home")

    if (res.ok) {
        const groups = await res.json();
        dispatch(loadGroups(groups))

    }
}


export const editGroup = (formData) => async (dispatch) => {
    console.log("THIS IS THE ID STORE--------", formData.get("id"))
    let formDataId = formData.get("id")
    // console.log("THIS IS EDIT GROUP-------", formData)
    const id = parseInt(formDataId, 10)
    const res = await fetch(`/api/groups/${formDataId}`, {
    method: 'PUT',
    body: formData,
    });

    if(res.ok) {
        const group = await res.json()
        dispatch(addGroup(group))
    } else if (res.status < 500) {
        const data = await res.json();
        if (data.errors){
            console.log(data.errors)
            return data.errors;
        } 
            
    } else return ['An error occurred. Please try again.']
}

export const removeGroup = (groupId) => async (dispatch) => {
    const id = parseInt(groupId, 10)
    const res = await fetch(`/api/groups/${id}`, {
        method: 'DELETE',
    })

    if(res.ok) {
        dispatch(deleteGroup(id))
    }
}

export const loadSingleGroup = (id) => async (dispatch) => {
    const res = await fetch(`/api/groups/${id}`);

    if (res.ok) {
        const group = await res.json();
        dispatch(addGroup(group))
    }
    else return ['An error occurred. Please try again.']
}


// end of thunks
/////////////////////////////////////////
// reducer


const initialState = {};
const groupsReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case POST_GROUP:
            newState[action.payload.id] = action.payload
            return newState
        case GET_GROUP:
            newState = action.payload
            return newState
            // assumes incoming trips are flattened
        case DELETE_GROUP:
            delete newState[action.payload]
            return newState
        default:
            return state;
    }
}


export default groupsReducer;