import axios from 'axios';


export const fetchJoke = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_JOKE_START'});
        axios
            .get('https://official-joke-api.appspot.com/jokes/programming/random')
            
            .then(res => {
                dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: res.data.joke });
            
            })
            .catch(err => {
                dispatch({
                    type: 'FETCH_QUOTE_FAILURE',
                    payload: `Error ${err.response.status}: ${err.response.data}`
                })
            })
    }
}