import {
    authConstants
} from '../constants';

let user = JSON.parse(localStorage.getItem('user'));

const initialState = user ?
    {
        loggedIn: true,
        user,
        error: null
    } :
    {
        loggedIn: false,
        error: null
    }; //setting the intitial state of the user login 

//reducer takes in two parameters which is the state that is to be manipulated and the action type
export function auth(state = initialState, action) {
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return {
                ...state, //copy of the state for mutable reasons
                loggedIn: true,
                    user: action.user,
                    loading: true //for screen loading when something is loading
            };
        case authConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                    loading: false,
                    user: action.user
            };
        case authConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
                    loggingIn: false,
                    loading: false,
                    error: action.error
            };
        case authConstants.LOGOUT:
            return {
                loggingIn: false,
                    loading: false,
                    user: {}
            };
        default:
            return state;
    }

}
