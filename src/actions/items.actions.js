import { itemsConstants } from '../constants';
import { http, appConfig } from "../helpers";

export const itemsActions = {
    getItem
}

function getItem(url) {
    console.log(url,"data on action")
    console.log(`${appConfig.apiEndpoint}/${url}`)
    return dispatch =>{
        http
        .get(`${appConfig.apiUrl}/${url}`)
        .then(function(response){
            if(response.data.success) {
                dispatch(success(response.data.data));
            }else {
                dispatch(failure(response.data.reason));
            }
        })
    };
    function success(itemData) {
        return {
            type: itemsConstants.ITEMS_GET_SUCCESS, itemData
        }
    }
    function failure(error) {
        return {
            type: itemsConstants.ITEMS_GET_FAILURE, error
        }
    }

}
