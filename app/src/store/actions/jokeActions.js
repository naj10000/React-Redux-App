import axios from 'axios';


export const fetchJoke = () => {
    return dispatch => {
        dispatch({ type: 'FETCH_JOKE_START'});
        axios
            .get('https://official-joke-api.appspot.com/jokes/random')
            .then(res => {
                
                dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: res.data });
                console.log(res.data);
            })
            
            .catch(err => {
                dispatch({
                    type: 'FETCH_QUOTE_FAILURE',
                    payload: `Error ${err.response}: ${err.response}`
                })
            })
    }
}