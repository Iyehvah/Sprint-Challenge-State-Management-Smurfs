import {
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,

    ADDING_SMURF_START,
    ADDING_SMURF_SUCCESS,
    ADDING_SMURF_FAILURE
} from '../actions/index';

const initialState = {
    post: [],
    smurfs: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('REDUCER', state);
    switch (action.type) {
        case FETCH_SMURF_START:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_SMURF_SUCCESS:
            return { 
                ...state,
                error: '',
                isFetching: false,
                smurfs: action.payload
            }
        case FETCH_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
        case ADDING_SMURF_START:
            return {
                ...state,
                post: [...state.post, action.payload],
                isFetching: true,
                error: ''
            }
        case ADDING_SMURF_SUCCESS:
            return {
                ...state,
                post: action.payload,
                isFetching: false,
                error: ''
            }
        case ADDING_SMURF_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            }
            default: 
                return state;
    }
}

export default reducer;