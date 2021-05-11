import axios from 'axios'

export const addUser = user => dispatch => {
    console.log("in action with",user);
    axios.post('http://localhost:5000/api/users',user).then((res)=>{
        dispatch({
            type: "ADD_USER",
            payload: user
        })
        console.log(res);
    }).catch(err=>{
        console.log(err);
    });
}

export const login = credentials => dispatch => {
    axios.post(`http://localhost:5000/api/users/${credentials.email}`,credentials).then((res) => {
        console.log(credentials);
        if(res.status === 200){
        dispatch({
            type: "LOGIN",
            payload: res.data
        })
    }
    }).catch(err => {
        console.log(err);
    })
}

export const logOut = () => dispatch => {
    dispatch({
        type: "LOGOUT"
    })
}