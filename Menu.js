import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import products from './products'; // Import the list of products
import prodctdetails from './productdetails'
import Vegetables from './Vegetables';

const Menu = () => {
    return (
        <Container className="mt-4">
            <Row>
                {products.map(product => (
                    <Col key={product.id} md={4} className="mb-4">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

const ProductCard = ({ product }) => {
    // Define the URL based on the product category
    let productUrl = '';
    if (product.name === 'Fruits') {
        productUrl = '/fruits';
    } else if (product.name === 'Vegetables') {
        productUrl = '/vegetables';
    } else if (product.name === 'dairy products') {
        productUrl = '/dairy-products';
    }

    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Link to={productUrl}>
                    <Button variant="primary">View More</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Menu;
