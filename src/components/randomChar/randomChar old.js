import React, {Component} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';
import PropTypes from 'prop-types'

export default class RandomChar extends Component {

    gotService = new GotService();

    state = {
        char:{},
        loading: true,
        error: false,
    }

    static defaultProps ={
        interval: 10000,
    }

    

    onCharLoaded = (char) => {
        this.setState({char,loading:false})
    }

    onError = (error) =>{
        this.setState({error: true, loading: false}) 
    }
    updateChar = () => {
        const id = Math.floor(Math.random()*140+12);
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }


    componentDidMount(){
        this.updateChar();
        this.timerId = setInterval(this.updateChar, this.props.interval)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    render() {
        console.log('render')
        const { char, loading, error } = this.state;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading||error) ? <View char={char}/> :  null ;
        const errorMessage = error ? <ErrorMessage/> : null;

        
      
        return (
            <div className="bg-light rounded " style={{marginBottom: "40px", padding: "25px 25px 15px 25px" }} >
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

RandomChar.propTypes = {
    interval: PropTypes.number,
}


const View = ({char}) => {

    let { name, gender, born, culture, died} = char;
    name = name||"no data :(";
    gender=gender||"no data :(";
    born= born||"no data :(";
    culture= culture||"no data :(";
    died=died||"no data :(";
    return (
        <>
        <h4 style={{marginBottom: "20px", textAlign: "center"}}>Random Character: {name}</h4>
        <ListGroup>
            <ListGroupItem  className="d-flex justify-content-between">
                <span className="font-weight-bold">Gender </span>
                <span>{gender}</span>
            </ListGroupItem>
            <ListGroupItem  className="d-flex justify-content-between">
                <span className="font-weight-bold">Born </span>
                <span>{born}</span>
            </ListGroupItem>
            <ListGroupItem  className="d-flex justify-content-between">
                <span className="font-weight-bold">Died </span>
                <span>{died}</span>
            </ListGroupItem>
            <ListGroupItem  className="d-flex justify-content-between">
                <span className="font-weight-bold">Culture </span>
                <span>{culture}</span>
            </ListGroupItem>
        </ListGroup>
        </>
    )
}

