import axios from "axios";

import { RECEIVED_STASHPOINTS, UPDATE_FILTERED_STASHPOINTS } from "../types";

export const fetchStashPoints = () => dispatch => {
    return axios
        .get("https://nameless-castle-51857.herokuapp.com/api/v1/stashpoints")
        .then(data => dispatch(receivedStashPoints(data)));
};

export const receivedStashPoints = stashpoints => (dispatch, getState) => {
    return dispatch({
        type: RECEIVED_STASHPOINTS,
        payload: stashpoints
    });
};

export const updateFilteredStashpoints = (term = "") => (dispatch, getState) => {
    const { stashpoints } = getState();
    return dispatch({
        type: UPDATE_FILTERED_STASHPOINTS,
        payload: {
            term,
            stashpoints
        }
    });
};
