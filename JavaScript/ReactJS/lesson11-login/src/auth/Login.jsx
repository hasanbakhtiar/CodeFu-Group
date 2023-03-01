import { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const user ={
    email:"b@a",
    pass:"1",

}


const Login = () => {

    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();
    const formSubmit =e=>{
        e.preventDefault();
        if (!emailRef.current.value || !passRef.current.value) {
            alert('please, fill input')
        }else{
            if (emailRef.current.value === user.email && passRef.current.value === user.pass) {
                alert('login success');
                navigate('/home')
            }else{
                alert('email or password is wrong')
            }
        }
       
    }
    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <h1 className='my-5'>Login</h1>
            <div className="col-4">
                <Form onSubmit={formSubmit}>
                    <Form.Group className="mb-3" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                   
                    </Form.Group>

                    <Form.Group className="mb-3" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passRef} type="password" placeholder="Password" />
                    </Form.Group>
                
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Login