let users = []

export default function(state = user,action) {
    switch (action.type) {
        case "ADD_USER":
            return ({
                ...users,
                users: [action.payload, ...state.users]
            })
        default:
            break;
    }
}