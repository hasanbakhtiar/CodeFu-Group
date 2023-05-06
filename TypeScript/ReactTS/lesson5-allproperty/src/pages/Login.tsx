import React, { useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import user from "../data/user";



const Login = () => {
  const [name,setName] = useState('');
  const [pass,setPass] = useState('');
  const [alertText,setAlertText] = useState('');
  
  const loginSubmit = (e:React.FormEvent)=>{
        e.preventDefault();
        if (!name || !pass) {
          alert('please,fill input');
        }else{
          for(let x in user){
            if (name === user[x].name && pass === user[x].password) {
              localStorage.setItem('user',user[x].name);
              window.location.reload();
              setAlertText('');
          }else{
            setAlertText('wrong');
          }
          }
          
                
                  
        }
  }
  
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="my-5">Login Page</h1>
        <p>{alertText}</p>

        <Col md={6}>
          <Form onSubmit={loginSubmit}> 
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Enter username" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control onChange={(e)=>{setPass(e.target.value)}} type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </div>
    </>
  );
};

export default Login;
