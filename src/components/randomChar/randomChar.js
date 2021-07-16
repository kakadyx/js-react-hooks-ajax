import React, {useState, useEffect} from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import GotService from '../../services/gotService';
import Spinner from '../spinner/spinner';

function RandomChar({interval}){
    const [char, setChar] = useState({});
    const [loading, setLoading] = useState(true);

    const spinner = loading ? <Spinner /> : null;
    const content = !(loading) ? <View char={char}/> :  null ;

    
    let gotService = new GotService();

    
    useEffect(()=>{
        updateChar();
        let timerId = setInterval(updateChar, interval)
        return clearInterval(timerId);
    }, [])

    
    return (
        <div className="bg-light rounded " style={{marginBottom: "40px", padding: "25px 25px 15px 25px" }} >
            {spinner}
            {content}
        </div>
    );

    function onCharLoaded(char){
        setChar(char);
        setLoading(false);
    }

    function updateChar(){
        const id = Math.floor(Math.random()*140+12);
        gotService.getCharacter(id)
            .then(onCharLoaded);
    }


    
}


const View = ({char}) => {
    let { name, gender, born, culture, died } = char;
    name = name||"no data :(";
    gender = gender||"no data :(";
    born = born||"no data :(";
    culture = culture||"no data :(";
    died = died||"no data :(";
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

export default RandomChar;