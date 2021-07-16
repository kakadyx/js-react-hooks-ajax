import React from "react";
import RandomChar from "../randomChar/randomChar";
import { Col,Row, Button } from "reactstrap";


export default class MainPage extends React.Component{

    state = {
        visRanChar: true,
    }


    toggleRandomChar = ({state}) => {
        this.setState({visRanChar:!this.state.visRanChar})

    }


    render(){
        const RandChar = this.state.visRanChar ? <RandomChar interval={15000}/> : null;
        return(
            <>
                <Row  className="d-flex justify-content-center">
                    <Col lg={{size: 12, offset: 0}} style={{padding:"40px"}}>
                        <h1 style={{textAlign:"center",fontWeight:"bold", color:"white"}}>Добро пожаловать на сайт использующий GOT API</h1>
                        <h2  style={{paddingTop:"30px", textAlign:"center",color:"white"}} className="align-item-center">Сайт написан на React, с использованием Reactstrap</h2>
                    </Col>
                </Row>

                <Row className="d-flex justify-content-center">
                    <Col lg={{size: 5, offset: 0}} >
                        {RandChar}
                    </Col>    
                </Row >
                    <Row className="d-flex justify-content-center">
                        <Button className=" mb-5 mt-2" style={{margin:"15px"}} onClick={this.toggleRandomChar}>Toggle Random Character</Button>
                </Row>
            </>
        )
 }
}
