import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const SingleCard = ({count,title,photo,price}) => {
  return (
    <tr>
    <td>{count+1}</td>
    <td><img width={50} src={photo} alt="" /></td>
    <td>{title}</td>
    <td>{price}$</td>
    <td><Button variant='warning'>Edit</Button></td>
    <td><Button variant='danger'>Delete</Button></td>
  </tr>
  )
}

export default SingleCard