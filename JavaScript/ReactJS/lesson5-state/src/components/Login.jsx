import React, { Component } from 'react'

const userdata = [
    {
        email:'info@exmaple.com',
        password:'info2023'
    }
]


export class Login extends Component {
    constructor(){
        super();
        this.state={
            email:"",
            pass:"",
            alert:"",
            alertText:""
        }
    }

    emailChange=e=>{
        this.setState({
            email:e.target.value
        })
    }

    formSubmit=e=>{
            e.preventDefault();
            if (!this.state.email || !this.state.pass) {
                this.setState({
                    alert:"warning",
                    alertText:"Please, fill out this input!"
                })
                
            }else{
                if (this.state.email === userdata[0].email && this.state.pass === userdata[0].password) {
                    this.setState({
                        alert:"success",
                        alertText:"Login is successfull!"
                    })
                }else{
                    this.setState({
                        alert:"danger",
                        alertText:"Password or email address is wrong!"
                    })
                }
            }
    }
  render() {
    return (
       <div className="container">
        <h1 className='text-center my-5'>Login</h1>
        <div className="d-flex align-items-center justify-content-center flex-column">
            <div className="col-6">
        <p className={`text-center alert alert-${this.state.alert}`}>{this.state.alertText}</p>

            <form onSubmit={this.formSubmit}>
            <div className="mb-3">
                <label  className="form-label">Email address</label>
                <input onChange={this.emailChange} type="email" className="form-control"  />
            </div>


            <div className="">
                <label  className="form-label">Password</label>
            </div>
            <div className="input-group mb-3">
            <input onChange={e=>{this.setState({pass:e.target.value})}} type="password" className="form-control" />
            <button className="btn btn-outline-secondary" type="button" ><i class="fa-solid fa-eye"></i></button>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
        </div>
       </div>

    )
  }
}

export default Login