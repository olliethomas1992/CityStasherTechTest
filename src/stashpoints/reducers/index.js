import { RECEIVED_STASHPOINTS } from "../types";

const stashpoints = (state, action) => {
    switch (action.type) {
        case RECEIVED_STASHPOINTS:
            return {
                ...state,
                ...action.payload.data.reduce((obj, stashpoint) => {
                        obj[stashpoint.id] = stashpoint;
                        return obj;
                }, {})
            }
    
        default:
           return { ...state }
    }
}

export default {
    stashpoints
}

