import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
function SingleCard({ title, price, photo, alldata }) {
  const { addItem } = useCart();
  const notify = () => toast.success("Added products", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
  return (
    <Col sm={12} md={4}>
      <Card >
        <Card.Img height={500} variant="top" src={photo} alt={title} />
        <Card.Body>
          <Card.Title>{title.substring(0, 30)}...</Card.Title>
          <Card.Text>
            {price}$
          </Card.Text>
          <Button variant="primary">Read more</Button>
          <Button variant="warning ms-3" onClick={() => { notify(addItem(alldata)) }}>Add to cart</Button>
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />

        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleCard;