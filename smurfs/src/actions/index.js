import axios from 'axios';

export const FETCH_SMURF_START = 'FETCH_SMURF_START';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';

export const ADDING_SMURF_START = 'ADDING_SMURF_START';
export const ADDING_SMURF_SUCCESS = 'ADDING_SMURF_SUCCESS';
export const ADDING_SMURF_FAILURE = 'ADDING_SMURF_FAILURE';


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

export const addSmurf = (smurfs) => dispatch =>{
    dispatch({ type: ADDING_SMURF_START });
    axios.post('http://localhost:3333/smurfs', smurfs)
    .then(res => dispatch({ type: ADDING_SMURF_SUCCESS, payload: res.data})
    )
    .catch(error => dispatch({type: ADDING_SMURF_FAILURE, payload: `${error.response.status} ${error.response.data}`})
    );
};