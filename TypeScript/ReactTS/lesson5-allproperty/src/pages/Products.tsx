import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { ProductContext } from "../context/ProductContext";
import { useCart } from "react-use-cart";

const Products: React.FC = () => {
  const [product] = useContext(ProductContext);
  const {addItem} = useCart();
  return (
    <Container>
        <h1 className="my-5 text-center">Products</h1>
      <Row className="g-5">
        {product.map((item: any) => (
          <Col key={item.id} sm={12} md={4}>
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary" onClick={()=>{addItem(item)}}>Add to cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
