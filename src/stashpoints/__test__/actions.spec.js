import axios from 'axios';
import { RECEIVED_STASHPOINTS } from '../types'
import { fetchStashPoints, API_URL, receivedStashPoints } from "../actions";

describe("Stashpoint Actions", () => {
    test("Should fetch stashpoints", () => {
        let mockFetchStashpoints = jest.fn(() => {
            return Promise.resolve({
                data: {
                    stashpoints: 'Some Mock Stashpoints'
                }
            })
        });

        let dispatch = jest.fn();

        axios.get = mockFetchStashpoints;

        return fetchStashPoints()(dispatch).then(data => {
            expect(mockFetchStashpoints).toHaveBeenCalled();
            expect(mockFetchStashpoints).toHaveBeenCalledWith(API_URL);
            expect(dispatch).toHaveBeenCalled();
        });
    });

    test("Should dispatch received Stashpoints", () => {
        let dispatch = jest.fn();
        let stashpoints = "Some stashpoints";

        receivedStashPoints(stashpoints)(dispatch);
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
            type: RECEIVED_STASHPOINTS,
            payload: stashpoints
        });
    });
});