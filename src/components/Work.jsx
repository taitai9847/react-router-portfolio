import React, { Component } from 'react';
import {Card, Button, Col, Row} from 'react-bootstrap';
import beer2 from '../image/beer2.png';
import portfolio2 from '../image/portfolio2.png';
import snowing from '../image/snowing.png';

const Work = () => {

    const fontStyle = {
        fontFamily: 'Georgia',
        fontSize: '50px'
    }

    return (
    <div style={{width: "95vw",paddingTop:'150px', textAlign:"center"}}>
        <Row>
            <Col></Col>
            <Col>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={portfolio2} />
                    <Card.Body>
                        <Card.Title>Portfolio</Card.Title>
                        <Card.Text>
                        react-routerを用いてポートフォリオサイトを作りました。参考程度に！
                        </Card.Text>
                        <Button variant="outline-primary">Click!</Button>
                    </Card.Body>
                </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={snowing} />
                    <Card.Body>
                        <Card.Title>snowing</Card.Title>
                        <Card.Text>
                        processingで作った作品です。スノースマイルという曲をイメージして作りました。
                        </Card.Text>
                        <Button variant="outline-primary">Click!</Button>
                    </Card.Body>
            </Card>
            </Col>
            <Col></Col>
        </Row>
    </div>
    )
}

export default Work