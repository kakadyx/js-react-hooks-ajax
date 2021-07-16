import React from 'react';
import {Col,Row} from 'reactstrap'
const RowBlock = ({left,right}) => {
    return (
        <Row>
            <Col md='6' style={{padding:"30px"}}>
                {left}
            </Col>
            <Col md='6'style={{padding:"30px"}}>
                {right}
            </Col>
        </Row>
    )
}

export default RowBlock;