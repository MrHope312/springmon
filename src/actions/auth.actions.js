//actions require constants 
import {
    authConstants
} from '../constants';
import {
    history
} from '../helpers/history';

export const authActions = {
    login,
    logout
};

function login (username, password){
    console.log(username,password)
    return dispatch => {
        dispatch(request({
            username
        }));
        // let faile = {
        //     error: 'some failure'
        // }
        if (username === 'shreyas' && password === 'shreyas') {
            let user = {
                uname : 'shreyas'
            };
            localStorage.setItem("user", JSON.stringify(user));
            dispatch(success(user));
            history.push('/servers'); //server page
        } else {
            // dispatch(failure(faile.error));
            history.push('/login');
        }
    };

    function request(user) {
        return {
            type: authConstants.LOGIN_REQUEST,
            user
        };
    }

    function success(user) {
        return {
            type: authConstants.LOGIN_SUCCESS,
            user
        };
    }

    // function failure(error) {
    //     return {
    //         type: authConstants.LOGIN_FAILURE,
    //         error
    //     };
    // }
}

function logout() {
    return dispatch => {
        localStorage.removeItem('user')
        dispatch({
            type: authConstants.LOGOUT
        });
        history.push("/"); //change route 
    }
}
