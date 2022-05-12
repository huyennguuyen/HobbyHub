//import { csrfFetch } from './csrf';

const GET_GROUP = "group/getGroup"
const POST_GROUP= "group/postGroup"
const DELETE_GROUP = "group/deleteGroup"

// CONSTANTS display text in actions log
/////////////////////////////////////////
// action creators
// actions are just objects

const addGroup = (group) => {
    return {
        type: POST_GROUP,
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

export const postNewGroup = (newGroup) => async (dispatch) => {
    // const { ownerId, name, description, backgroundImage} = newGroup
    // console.log("THIS IS NAME-------------", name)
    const response = await fetch('/api/groups/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGroup)
    });

    if (response.ok) {
        const data = await response.json();
        console.log("THIS IS DATA IN THE STORE---------", data)
        dispatch(addGroup(data))
    } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) return data.errors;
    } else return ['An error occurred. Please try again.']
}

export const getAllGroups = (userId) => async (dispatch) => {
    const res = await fetch(`/api/groups/users/${userId}`)
    if (res.ok) {
        const groups = await res.json();
        dispatch(loadGroups(groups))
    }
}


export const editGroup = (editGroup) => async (dispatch) => {
    const id = parseInt(editGroup.id, 10)
    const res = await fetch(`/api/groups/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(editGroup)
    });

    if(res.ok) {
        const group = await res.json()
        dispatch(addGroup(group))
    }
}

export const removeGroup = (id) => async (dispatch) => {
    const id = parseInt(id, 10)
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