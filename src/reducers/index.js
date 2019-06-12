import {
    combineReducers
} from 'redux';

import {
    auth
} from './auth.reducer';
import {
    user
} from './register.reducer';
import {
    dashboard
} from './dashboard.reducer';



const rootReducer = combineReducers({
    auth,
    user,
    dashboard
});
export default rootReducer;
