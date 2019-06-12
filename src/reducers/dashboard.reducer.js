import {
    dashboardConstants
} from '../constants';

export function dashboard(state = {}, action) {
    switch (action.type) {
        case dashboardConstants.DASHBOARD_GET_SUCCESS:
            console.log(action.item,"from reducer while setting the state")
            return {
                ...state,
                dashboard: action.dashboard
                
            }
            case dashboardConstants.DASHBOARD_GET_FAILURE:
                return {
                    ...state,
                    dashboard: {}
                }
                default:
                    return state;
    }
}
