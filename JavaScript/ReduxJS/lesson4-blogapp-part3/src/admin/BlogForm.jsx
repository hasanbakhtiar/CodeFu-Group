import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";

const BlogForm = (props) => {
  const [iphoto, setiPhoto] = useState("");
  const [ititle, setiTitle] = useState("");
  const [idesc, setiDesc] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (!iphoto || !ititle || !idesc) {
      alert("please, fill input!");
    } else {
      props.onFormSubmit({
        photo: iphoto,
        title: ititle,
        desc: idesc,
      });
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center">
      <Col sm={6}>
        <Form onSubmit={formSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo link"
              onChange={(e) => {
                setiPhoto(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              onChange={(e) => {
                setiTitle(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Enter Description"
              onChange={(e) => {
                setiDesc(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </div>
  );
};

export default BlogForm;
