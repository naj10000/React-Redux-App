import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchJoke }  from '../store/actions/jokeActions';



 const RandomJoke = props => {

    useEffect(()=> {
        props.fetchJoke();
    },[]);

    return(
        <div>
             <h1>RandomJokes</h1>
            {props.isFetching && (
                 <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <div>
                
            {props.joke.setup && <p>"{props.joke.setup}"</p>}
            {props.joke.punchline && <p>"{props.joke.punchline}"</p>}
            {props.error && <p className="error">{props.error}</p>}
            
            </div>
            <button onClick={props.fetchJoke}>Grab a new Joke</button>
        </div>
       
    )
}

const mapStateToProps = state => {
    console.log(state);
    return {
        joke: state.jokes.joke,
        isFetching: state.jokes.isFetching,
        error: state.jokes.error
    }
}

export default connect(mapStateToProps, { fetchJoke })(RandomJoke);