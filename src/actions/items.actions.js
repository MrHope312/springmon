import { itemsConstants } from '../constants';
import { http, appConfig } from "../helpers";

export const itemsActions = {
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
    function success(item) {
        return {
            type: itemsConstants.ITEMS_GET_SUCCESS, item
        }
    }
    function failure(error) {
        return {
            type: itemsConstants.ITEMS_GET_FAILURE, error
        }
    }

}
