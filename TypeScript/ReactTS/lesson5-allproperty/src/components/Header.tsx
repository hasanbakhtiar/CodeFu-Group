import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [product] = useContext(ProductContext);
  const [query,setQuery] = useState<string>("");
  return (
    <Navbar bg="dark" className="navbar-dark" expand="lg">
      <Container fluid>
        <LinkContainer to="/">
          <Navbar.Brand>Blog App</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <LinkContainer to="/">
              <Nav.Link onClick={()=>{
                document.body.attributes[0].value = ('red');
              }}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link onClick={()=>{
                document.body.attributes[0].value = ('green');
              }}>Products</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blogs">
              <Nav.Link>Blogs</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form className="d-flex">
<div>

<div>
  {/* Button trigger modal */}
  <button type="button" className="btn btn-primary me-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
    Search
  </button>
  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="exampleModalLabel">Products</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
            <div className="input-group mb-3">
          <input  onChange={(e:any)=>{setQuery(e.target.value);
          }} type="text" className="form-control"  />
        </div>

          <ol>
            {query.length === 0 ? <></> : product.filter((item:any)=>item.title.toLocaleLowerCase().includes(query)).map((item: any) => {
             return <li><Link to={`product/${item.id}`}>{item.title}</Link></li>
            })}
          </ol>
        </div>
       
      </div>
    </div>
  </div>
</div>

</div>

            <LinkContainer to="/cart">
              <Button variant="success me-3">Cart</Button>
            </LinkContainer>
            {localStorage.getItem("user") === null ? (
              <LinkContainer to="/login">
                <Button variant="warning">Login</Button>
              </LinkContainer>
            ) : (
              <>
                <p className="me-3">{localStorage.getItem("user")}</p>
                <Button
                  onClick={() => {
                    localStorage.removeItem("user");
                    window.location.reload(); 
                  }}
                  variant="danger"
                >
                  Log out
                </Button>
              </>
            )}
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
