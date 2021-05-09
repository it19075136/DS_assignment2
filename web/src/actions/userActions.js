export default addUser = users => dispatch => {
    // call apis
    dispatch({
        type: "ADD_USER",
        payload: "test payload"
    })
}