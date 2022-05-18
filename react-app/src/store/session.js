// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      let errorsObj = data.errors
      let together = [];
      for (let i = 0; i < errorsObj.length; i++) {
        let each = errorsObj[i]
        let split = each.split(" ")
        let joinedSplit = split.slice(2)
        let joining = joinedSplit.join(" ")
        together.push(joining)
      }

      return together

      // let errorArr = data.errors;
      // let values = [];
      // //console.log("THIS IS DATA ERRORS---------", data.errors)
      // for (let i = 0; i < errorArr.length; i++) {
      //    let each = errorArr[i]
      //    for(let j = 0; j < each.length; i++) {
      //      let word = each[j]
      //    }
      //    if (each.includes("email :") || each.includes("password :")) {
      //       each.splice

      //    }
      // }
      // errorObj.map(error => {
      //   if error.includes
      // })
      // for (const key in errorObj) {
      //   values.push(errorObj[key])
      // }
      // console.log("THIS IS VALUES----", values)
      // return values

      // console.log("THIS IS VALUES---", data.errors)
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    default:
      return state;
  }
}
