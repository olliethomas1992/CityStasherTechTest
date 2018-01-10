import { RECEIVED_STASHPOINTS, UPDATE_FILTERED_STASHPOINTS } from "../types";

const stashpoints = (state, action) => {
    switch (action.type) {
        case RECEIVED_STASHPOINTS:
            return {
                ...state,
                ...action.payload.data.reduce((obj, stashpoint) => {
                    obj[stashpoint.id] = stashpoint;
                    return obj;
                }, {})
            };

        default:
            return { ...state };
    }
};

const filteredStashpoints = (state, action) => {
    switch (action.type) {
        case UPDATE_FILTERED_STASHPOINTS:
            return { 
                ...filterStashpoints(action.payload.stashpoints, action.payload.term)
            };
        default:
            return { ...state };
    }
};

const filterStashpoints = (stashpoints, filter) => {
    return _.filter(stashpoints, stashpoint => {
        if (stashpoint.location_name.match(new RegExp(filter, "i"))) {
            return stashpoint;
        }
    });
};

export default {
    stashpoints,
    filteredStashpoints
};
