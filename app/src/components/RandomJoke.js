import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import { fetchJoke }  from '../store/actions/jokeActions';
import { Button, Card, CardTitle, CardText, Container } from 'reactstrap';




 const RandomJoke = props => {

    useEffect(()=> {
        props.fetchJoke();
    },[]);

    return(
        <Container fluid="md">
        <Card body inverse color="info">
             <h1>RandomJokes</h1>
            {props.isFetching && (
                 <Loader type="Puff" color="#00BFFF" height={100} width={100} />
            )}
            <div>
                
            {props.joke.setup && <CardText>"{props.joke.setup}"</CardText>}
            {props.joke.punchline && <CardText>"{props.joke.punchline}"</CardText>}
            {props.error && <p className="error">{props.error}</p>}
            
            </div>
            <Button color="danger" onClick={props.fetchJoke}>Grab a new Joke</Button>
        </Card>
        </Container>
       
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