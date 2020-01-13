import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const getSmurfs = () => dispatch =>{
    dispatch({ type: FETCH_SMURF_START });
    axios.get('http://localhost:3333/smurfs')
    .then(res => dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data})
    )
    .catch(error => {
        console.log(error.response);
        dispatch({ type: FETCH_SMURF_FAILURE, payload: `${error.response.status} ${error.response.data}`})
    })
};