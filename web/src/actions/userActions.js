import axios from 'axios'

export const addUser = user => dispatch => {
    axios.post('http://localhost:5000/api/users',user).then((res)=>{
        console.log("User added!!!");
        dispatch({
            type: "ADD_USER",
            payload: user
        })
    }).catch(err=>{
        console.log(err);
    });
}