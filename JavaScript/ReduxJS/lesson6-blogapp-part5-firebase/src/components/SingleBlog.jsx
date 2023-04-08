import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

const SingleBlog=({id,photo,title,desc})=> {
  return (
  <Col sm={12} md={4}>
              <Card >
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
       <LinkContainer to={`/blogs/${id}`}>
       <Button variant="primary">Read More</Button>
       </LinkContainer>
      </Card.Body>
    </Card>
  </Col>
  );
}

export default SingleBlog;