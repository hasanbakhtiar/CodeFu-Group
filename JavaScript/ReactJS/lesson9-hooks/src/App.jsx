import axios from 'axios';
import React, { Component } from 'react'
import { Col, Container, Row, Card, Button } from 'react-bootstrap';

export class App extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        axios.get('https://fakestoreapi.com/products')
            .then(res => this.setState({ products: res.data }))
    }

    render() {
        return (
            <Container>
                <Row className='g-5'>
                    {this.state.products.map(item => {
                        return <Col sm={12} md={4}>
                            <Card >
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>

                        </Col>
                    })}
                </Row>

            </Container>
        )
    }
}

export default App