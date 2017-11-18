import { combineReducers } from 'redux';

import main from '../pages/main/reducer'

const appReducer = combineReducers({
    main
});

export default (state = {}, action) => {
    return appReducer(state, action)
}
