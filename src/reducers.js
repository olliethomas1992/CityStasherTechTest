import { combineReducers } from "redux";

import stashpoints from './stashpoints/reducers'

const rootReducer = combineReducers({
    ...stashpoints
});

export default rootReducer;
