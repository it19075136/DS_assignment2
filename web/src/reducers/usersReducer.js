let initstate = {
    formSubmitted: false,
    users: [],
    profile: {},
    authError: false
}

export default function (state = initstate, action) {
    switch (action.type) {
        case "ADD_USER":
            console.log(action.payload)
            if(action.payload === "ALREADY_EXISTS"){  
                console.log("auth Error") 
            return {
                ...state,
                authError: true
            }
        }
        else{
            return {
                ...state,
                users: [action.payload, ...state.users],
                profile: action.currentUser,
                authError: false
            }
        }
        case "LOGIN":
            if (action.payload === "AUTHERROR") {
                console.log("authError")
                return {
                    ...state,
                    authError: true,
                    formSubmitted: false // after update user formsubmition reset    
                }
            }
            else {
                return {
                    ...state,
                    authError: false,
                    profile: action.payload,
                    formSubmitted: false // after update user formsubmition reset
                }
            }
        case "LOGOUT":
                return {
                    ...state,
                    authError: false,
                    formSubmitted: false, // after update user formsubmition reset 
                    profile: {}
                }
        case "UPDATE_USER":
            return {
                ...state,
                profile: action.payload.user,
                formSubmitted: false // after update user formsubmition reset
            }
        case "UPDATE_PROFILE_PICTURE":
            return {
                ...state,
                profile: {
                    ...state.profile,
                    profileImage: action.payload.image
                }
            }
        case "FORM_SUBMITION_STATUS":
            return {
                ...state,
                formSubmitted: action.payload.status
            }
        default:
            return state;
    }
}