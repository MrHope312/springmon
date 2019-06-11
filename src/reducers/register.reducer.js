import { registerConstants } from '../constants';


export function user(state = {}, action) {
    switch (action.type) {
        case registerConstants.REGISTER_ADD_REQUEST:
            return {
                ...state
            }
        case registerConstants.REGISTER_ADD_SUCCESS:
            return {
                ...state,
                usersList : {
                    content : state.usersList.content.concat(action.user)
                },
                date: new Date().getTime()
            };
        case registerConstants.REGISTER_ADD_FAILURE:
            return {
                ...state,
                date: new Date().getTime()
            };
        default:
            return state;
    }
}
