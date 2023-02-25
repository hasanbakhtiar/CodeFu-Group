import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';

const SingleCard = ({ title, photo, price, desc, id }) => {
  return (
    <Col sm={12} md={4}>
      <Card >
        <Card.Img height={400} variant="top" src={photo} />
        <Card.Body>
          <Card.Title> {title.substring(0, 30)}</Card.Title>
          <Card.Text>
            {desc.substring(0, 30)}...
          </Card.Text>
          <Card.Text>
            {price}$
          </Card.Text>
          <LinkContainer to={`/shop/${id}`}>
            <Button variant="warning ">Read more</Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default SingleCard