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
    item
} from './items.reducer';



const rootReducer = combineReducers({
    auth,
    user,
    item
});
export default rootReducer;
