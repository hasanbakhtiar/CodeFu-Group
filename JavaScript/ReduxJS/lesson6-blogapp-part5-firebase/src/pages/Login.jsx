import React from 'react'
import { useState } from 'react'
import u from '../data/user';
import { useNavigate } from 'react-router-dom';
const Login = props => {
    const [user,setUser] = useState();
    const [pass,setPass] = useState();
    const navigate = useNavigate();
    const loginSubmit=e=>{
        e.preventDefault();
        if (!user || !pass) {
                alert('fill out input');
        }else{
            if (user === u.username && pass === u.pass) {
                navigate('/dashboard');
            }else{
                alert('err')
            }
        }
    }
  return (
    <form onSubmit={loginSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">username</label>
    <input onChange={(u)=>{setUser(u.target.value)}} type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input onChange={(p)=>{setPass(p.target.value)}} type="password" className="form-control"  />
  </div>

  <button type="submit" className="btn btn-primary">Login</button>
</form>

  )
}

export default Login