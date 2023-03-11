import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';

function SingleCard({title,price,photo,alldata}) {
    const { addItem } = useCart();
  return (
   <Col sm={12} md={4}>
    <Card >
      <Card.Img variant="top" src={photo}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {price}$
        </Card.Text>
        <Button variant="primary">Read more</Button>
        <Button variant="warning ms-3" onClick={()=>{addItem(alldata)}}>Add to cart</Button>
      </Card.Body>
    </Card>
   </Col>
  );
}

export default SingleCard;