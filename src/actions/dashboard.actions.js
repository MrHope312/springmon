import { dashboardConstants } from '../constants';
import { http, appConfig } from "../helpers";

export const dashboardActions = {
    getItem
}

function getItem(url) {
    // console.log(url,"data on action")
    // console.log(`${appConfig.apiUrl}/${url}`)
    return dispatch =>{
        http
        .get(`${appConfig.apiUrl}/${url}`)
        .then(function(response){
            if(response.data) {
                console.log(response.data,"object received from api")
                dispatch(success(response.data));
            }else {
                console.log(response.data)
                dispatch(failure(response.data));
            }
        })
    };
    function success(dashboard) {
        return {
            type: dashboardConstants.DASHBOARD_GET_SUCCESS, dashboard
        }
    }
    function failure(error) {
        return {
            type: dashboardConstants.DASHBOARD_GET_FAILURE, error
        }
    }

}
