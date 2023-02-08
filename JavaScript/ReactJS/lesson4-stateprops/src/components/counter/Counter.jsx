import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        // this.increment = this.increment.bind(this);
        this.state={
            count:0
        }
    }
    
    increment=()=>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
  render() {
    return (
      <div className='mt-5'>
        <button className='btn btn-danger'>-1</button>
        <span className='mx-4'>{this.state.count}</span>
        <button className='btn btn-success' onClick={this.increment}>+1</button>
      </div>
    )
  }
}

export default Counter