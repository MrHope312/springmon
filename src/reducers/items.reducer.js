import {
    itemsConstants
} from '../constants';

export function item(state = {}, action) {
    switch (action.type) {
        case itemsConstants.ITEMS_GET_SUCCESS:
            console.log(action.item,"from reducer while setting the state")
            return {
                ...state,
                item: action.item
                
            }
            case itemsConstants.ITEMS_GET_FAILURE:
                return {
                    ...state,
                    items: {}
                }
                default:
                    return state;
    }
}
