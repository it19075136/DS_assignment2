let initstate = {
    users: [{name:"test1",email:"test@gmail.com"},{name:"test2",email:"test2@gmail.com"}]
}

export default function(state = initstate,action) {
    switch (action.type) {
        case "ADD_USER":
            return ({
                ...state,
                users: [action.payload, ...state.users]
            })
        default:
            return state;
    }
}