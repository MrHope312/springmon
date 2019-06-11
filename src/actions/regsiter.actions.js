// import { registerConstants } from "../constants"
// import { http, appConfig } from "../helpers";
export const registerActions = {
    addUser
};
function addUser(user) {
    return dispatch => {
    //   http
    //     .post(`${appConfig.apiUrl}/users`, user)
    //     .then(function (response) {
    //       if (response.data.success) {
    //         dispatch(success(response.data.data));
    //         toast.success("User added successfully");
    //       } else {
    //         dispatch(failure(user));
    //       }
    //     })
    //     .catch(function (error) {
    //       dispatch(failure(error));
    //     //   dispatch(errorHandlerActions.handleHTTPError(error));
    //     });
        
    };
  
    // function success(user) {
    //   return { type: registerConstants.USER_ADD_SUCCESS, user };
    // }
    // function failure(error) {
    //   return { type: registerConstants.USER_ADD_FAILURE, error };
    // }
  }
