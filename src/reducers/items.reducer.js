import {
    itemsConstants
} from '../constants';

export function item(state = {}, action) {
    switch (action.type) {
        case itemsConstants.ITEMS_GET_SUCCESS:
            return {
                ...state,
                items: action.items,
                    url: action.url
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
