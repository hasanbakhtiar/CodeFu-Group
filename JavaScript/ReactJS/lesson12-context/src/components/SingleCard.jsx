import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function SingleCard({title,date,photo}) {
  return (
   <Col sm={12} md={4}>
    <Card >
      <Card.Img variant="top" src={photo}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {date}
        </Card.Text>
        <Button variant="primary">Read more</Button>
        <Button variant="warning ms-3">Add to cart</Button>
      </Card.Body>
    </Card>
   </Col>
  );
}

export default SingleCard;