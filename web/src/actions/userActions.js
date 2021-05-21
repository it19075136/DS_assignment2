import axios from 'axios'
import setAuthorizationToken from './authActions';
import jwt from 'jsonwebtoken';
import hashPassword from 'password-hash'

export const addUser = user => dispatch => {
    return new Promise((resolve,reject) => {
    user.password = hashPassword.generate(user.password);
    console.log(user);
    axios.post('http://localhost:5000/api/users',user).then((res)=>{
        const {token} = res.data;
    if(token){    
        localStorage.setItem('jwtToken',token);
        setAuthorizationToken(token);
        dispatch({
            type: "ADD_USER",
            payload: user,
            currentUser: jwt.decode(token)
        })
    }
    else
        dispatch({
            type:"ADD_USER",
            payload: res.data
        })
        resolve("done");
    }).catch(err=>{
        console.log(err);
        reject(err);
    });
    });
}

export const login = credentials => dispatch => {
    return new Promise((resolve,reject) => {
        if(credentials.id){
            dispatch({
                type:"LOGIN",
                payload: credentials
            })
        }
        else{
        axios.post(`http://localhost:5000/api/users/${credentials.email}`,credentials).then((res) => {
            const {token} = res.data;
            if(token){
                localStorage.setItem('jwtToken',token);
                const currentUser = jwt.decode(token);
                if(res.status === 200){
                dispatch({
                    type: "LOGIN",
                    payload: currentUser
                })
            }
            }
            else{
                console.log("authError")
                dispatch({
                    type: "LOGIN",
                    payload: res.data
                })
            }
            resolve("done");
        }).catch(err => {
            console.log(err);
            reject(err);
        })
        }
    })

}

export const logOut = () => dispatch => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('cart');
    setAuthorizationToken(false);
    dispatch({
        type: "LOGOUT"
    })
    dispatch({
        type:"REMOVE_CART"
    })
}