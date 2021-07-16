import React from 'react';
import { Container} from 'reactstrap';
import Header from '../header/header';
import CharacterPage from '../Pages/characterPage';
import HousePage from '../Pages/housePage';
import BookPage from '../Pages/bookPage';
import GotService from '../../services/gotService';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import BooksItem from '../Pages/booksItem';
import './app.css'
import MainPage from '../Pages/mainPage';
export default class App extends React.Component{

    gotService = new GotService();

    state = {
        visRanChar: true,
        error: false,

    }


    toggleRandomChar = ({state}) => {
        this.setState({visRanChar:!this.state.visRanChar})

    }

    render(){
       // const RandChar = this.state.visRanChar ? <RandomChar/> : null;
       
        return (
            <Router> 
                <div className="app">
                <Container>
                    <Header />
                </Container>
                <Container>
                
                    <Route path='/' exact component={MainPage}/>
                    <Route path='/characters/' component={CharacterPage}/>
                    <Route path='/houses/' component={HousePage}/>
                    <Route path='/books/' exact component={BookPage}/>
                    <Route path='/books/:id' render={
                        ({match})=> {
                            const {id} = match.params;
                            return<BooksItem bookId={id}/>
                        }
                    }/>
                </Container> 
                </div>
            </Router>
        );
    }
    
};
